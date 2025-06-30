"use client";
import toast from "react-hot-toast";

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
    if(data.success === true){
      toast.success("Pinged IndexNow successfully!");
    } else{
      toast.error("Failed to ping IndexNow.");
      console.error("Ping error:", data.error || "Unknown error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-28">
      <button 
        type="button"
        onClick={handlePing}
        className="btnLeft w-auto"
      >
        Ping IndexNow
      </button>
    </div>
  );
}
