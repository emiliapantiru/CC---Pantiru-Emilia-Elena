import { NextRequest, NextResponse } from "next/server";
import { getQuoteForWeather } from "@/utils/quotes";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City missing" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.NEXT_WEATHER_API_KEY}`
    );
    const data = await res.json();

    const condition = data.current.condition.text.toLowerCase();
    let type = "default";
    if (condition.includes("sun")) type = "sunny";
    else if (condition.includes("rain")) type = "rain";
    else if (condition.includes("cloud")) type = "cloudy";

    return NextResponse.json({
      weatherType: type,
      quote: getQuoteForWeather(type),
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: "Weather fetch failed" },
      { status: 500 }
    );
  }
}
