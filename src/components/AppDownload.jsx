const AppDownload = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-[#181818] border border-[#2a2a2a] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#D9485F]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#C9A227]/20 blur-3xl rounded-full" />

        <div className="relative z-10">
          <p className="uppercase tracking-[6px] text-[#C9A227] mb-4">
            Mobile App
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download the BentoBox App
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Order your favorite Japanese dishes, track deliveries in real-time,
            and earn exclusive rewards directly from our mobile app.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-black border border-white/10 hover:border-[#D9485F] transition rounded-2xl px-6 py-4 flex items-center gap-4"
            >
              <img
                src="/appstore.png"
                alt="App Store"
                className="h-10 w-10 object-contain"
              />

              <div className="text-left">
                <p className="text-xs text-gray-400">Download on the</p>
                <p className="font-semibold">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-black border border-white/10 hover:border-[#C9A227] transition rounded-2xl px-6 py-4 flex items-center gap-4"
            >
              <img
                src="/playstore.png"
                alt="Google Play"
                className="h-10 w-10 object-contain"
              />

              <div className="text-left">
                <p className="text-xs text-gray-400">Get it on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;