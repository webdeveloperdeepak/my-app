
export async function notifyIndexNowBulk(urls: string[]) {

  const INDEXNOW_KEY = "3497f3e949824fb4a566bc8eeb15b2a2"; // replace with real key
  const HOST = "www.webdeveloperdeepak.com"; // without https
  const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Bulk IndexNow ping failed:", await res.text());
    }
  } catch (error) {
    console.error("Bulk IndexNow error:", error);
  }
}
