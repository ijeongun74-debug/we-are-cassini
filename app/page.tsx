'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Stage = 1 | 2 | 3 | 4;

export default function Home() {
  const [stage, setStage] = useState<Stage>(1);

  const getBackgroundImage = () => {
    switch (stage) {
      case 1:
        return '/start-bg.jpg';
      case 2:
        return '/next.jpg';
      case 3:
        return '/setlist_1.jpeg';
      case 4:
        return '/setlist_2.jpeg';
      default:
        return '/start-bg.jpg';
    }
  };

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden fixed inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={getBackgroundImage()}
            alt={`Step ${stage} background`}
            fill
            className="object-cover object-center"
            priority={stage === 1}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Step 1: 시작창 */}
      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
          >
            <button
              onClick={() => setStage(2)}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/start-button.png"
                alt="시작 버튼"
                width={350}
                height={105}
                priority
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 2: Next창 */}
      <AnimatePresence mode="wait">
        {stage === 2 && (
          <>
            <motion.div
              key="step2-back"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-5 left-5 z-10"
            >
              <button
                onClick={() => setStage(1)}
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/back-button.png"
                  alt="뒤로가기 버튼"
                  width={350}
                  height={350}
                />
              </button>
            </motion.div>
            <motion.div
              key="step2-next"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
            >
              <button
                onClick={() => setStage(3)}
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/setlist-button.png"
                  alt="Next 버튼"
                  width={900}
                  height={270}
                />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Step 3: 세트리스트 1부 */}
      <AnimatePresence mode="wait">
        {stage === 3 && (
          <>
            <motion.div
              key="step3-back"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-5 left-5 z-10"
            >
              <button
                onClick={() => setStage(2)}
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/back-button(black).png"
                  alt="뒤로가기 버튼"
                  width={350}
                  height={350}
                />
              </button>
            </motion.div>
            <motion.div
              key="step3-next"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-2 right-5 z-10"
            >
              <button
                onClick={() => setStage(4)}
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/next-button.png"
                  alt="Next 버튼"
                  width={300}
                  height={90}
                />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Step 4: 세트리스트 2부 */}
      <AnimatePresence mode="wait">
        {stage === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-5 left-5 z-10"
          >
            <button
              onClick={() => setStage(3)}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/back-button(black).png"
                alt="뒤로가기 버튼"
                width={350}
                height={350}
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
