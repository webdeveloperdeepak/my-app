"use client";

export default function UrlPing() {

  async function handlePing() {
    const res = await fetch("/api/ping-indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        urlList: [
          "https://www.webdeveloperdeepak.com/robots.txt",
          "https://www.webdeveloperdeepak.com/sitemap-0.xml",
          "https://www.webdeveloperdeepak.com/sitemap.xml",
        ],
      }),
    });
    const data = await res.json();
    console.log("Ping response:", data);
  }

  return (
    <button 
        type="button"
        onClick={handlePing}
        className="btnLeft w-12"
    >
      Ping IndexNow
    </button>
  );
}
