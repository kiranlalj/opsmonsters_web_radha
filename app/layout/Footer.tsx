"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300 bg-white px-6 md:px-12 py-16 text-neutral-700">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT — Branding */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Digital experiences that connect,<br /> scale and perform.
          </h2>

          <h1 className="mt-10 text-5xl md:text-[90px] font-bold leading-none">
            <span className="text-[#ff4d30]">Create</span>
            <span className="text-neutral-700">\Studio</span>
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            A creative agency for design, strategy, marketing,
            and scalable premium websites.
          </p>

          <p className="mt-10 text-xs">&copy;2025 Create Studio — All work, all rights.</p>
        </div>

        {/* MIDDLE — Address */}
        <div>
          <p className="font-semibold text-xs mb-3 text-neutral-500">OFFLINE</p>
          <p className="text-sm leading-6">
            Create Studio LLC.<br />
            8 Sunset Blvd, Office 5<br />
            Los Angeles, CA 90026
          </p>

          <p className="mt-10 font-semibold text-xs mb-3 text-neutral-500">PHONE</p>
          <p className="text-4xl font-medium text-neutral-700">
            (310) 555-0165
          </p>
        </div>

        {/* RIGHT — Contact */}
        <div>
          <p className="font-semibold text-xs mb-3 text-neutral-500">ONLINE</p>
          <p className="text-sm text-[#ff4d30] font-medium">hello@create.com</p>
        </div>
      </div>

      {/* BOTTOM MINI FOOTER */}
      <div className="mt-20 flex items-center gap-6 text-xs text-neutral-500">
        <span>Create® Design Studio</span>
        <span>⚬</span>
        <span>Developed by Opsmonsters</span>
      </div>
    </footer>
  );
}
