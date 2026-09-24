import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Clapperboard } from 'lucide-react';

const VIDEO_SRC = '/explainer.mp4';

const VideoBanner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || hasError) return;
    try {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        await video.play();
        setIsPlaying(true);
      }
    } catch {
      setHasError(true);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.18)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.12)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <Clapperboard className="w-3.5 h-3.5" /> Explainer Video
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              See How Ptek Turns Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              A quick look at how we plan, design, and ship scalable web apps, mobile apps, and SaaS
              platforms — from first sprint to launch day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contactsection"
                className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-center shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={togglePlay}
                className="border border-gray-600 text-gray-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center inline-flex items-center justify-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause Video' : 'Watch Explainer'}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800 shadow-2xl shadow-blue-950/50">
              <div className="aspect-video w-full">
                {hasError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 text-center px-6">
                    <Clapperboard className="w-10 h-10 text-blue-400" />
                    <p className="text-sm text-gray-400">
                      Explainer video coming soon — add{' '}
                      <span className="font-mono text-blue-300">public/explainer.mp4</span>
                    </p>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={VIDEO_SRC}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/6804114-uhd_4096_2160_25fps.mp4"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-cover bg-slate-900"
                  />
                )}
              </div>

              {!isPlaying && !hasError && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                  aria-label="Play explainer video"
                >
                  <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center shadow-xl shadow-blue-600/40">
                    <Play className="w-7 h-7 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" />
                  </span>
                </button>
              )}

              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  disabled={hasError}
                  className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition disabled:opacity-40"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  disabled={hasError}
                  className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition disabled:opacity-40"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
