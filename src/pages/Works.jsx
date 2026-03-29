import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { works, getAllTags, getWorksByTag } from '../data/mockData';

function Works() {
  const [activeTag, setActiveTag] = useState('all');
  const [expandedWorkId, setExpandedWorkId] = useState(null);
  const tags = getAllTags();
  const filteredWorks = getWorksByTag(activeTag);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Header */}
      <section className="pt-40 pb-16">
        <div className="px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              作品展示
            </h1>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto">
              探索我的设计作品，包括网页设计、UI设计、品牌设计等多个领域。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="pb-12">
        <div className="px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-3 font-medium transition-all border-2 ${
                  activeTag === tag
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-transparent text-[#888888] border-[#E0E0E0] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="pb-24">
        <div className="px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => {
              const isPosterWork = work.id === '1';
              const isExpanded = expandedWorkId === work.id;
              
              const toggleExpand = (e) => {
                if (isPosterWork) {
                  e.preventDefault();
                  setExpandedWorkId(isExpanded ? null : work.id);
                }
              };

              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={!isPosterWork ? { y: -8 } : {}}
                  className={isPosterWork ? '' : 'group'}
                >
                  {isPosterWork ? (
                    <div>
                      <div 
                        onClick={toggleExpand}
                        className="bg-white overflow-hidden transition-all hover:shadow-xl cursor-pointer"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-72 object-cover transition-transform duration-500"
                          />
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                            {work.title}
                          </h3>
                          <p className="text-[#666666] mb-6 line-clamp-2">
                            {work.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {work.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#F8F6F5] text-sm text-[#666666]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#F8F6F5] overflow-hidden"
                          >
                            <div className="p-8">
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                  作品细节图
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="aspect-video overflow-hidden bg-white">
                                    <img
                                      src="/work5.jpg"
                                      alt="爆竹图鉴 - 细节图1"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="aspect-video overflow-hidden bg-white">
                                    <img
                                      src="/work5.jpg"
                                      alt="爆竹图鉴 - 细节图2"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="aspect-video overflow-hidden bg-white">
                                    <img
                                      src="/work7.jpg"
                                      alt="爆竹图鉴 - 细节图3"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={toggleExpand}
                                className="flex items-center gap-2 text-[#888888] hover:text-[#1A1A1A] transition-colors"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 15l-6-6-6 6"/>
                                </svg>
                                收起详情
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={`/works/${work.id}`}>
                      <div className="bg-white overflow-hidden transition-all hover:shadow-xl">
                        <div className="relative overflow-hidden">
                          <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                            {work.title}
                          </h3>
                          <p className="text-[#666666] mb-6 line-clamp-2">
                            {work.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {work.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#F8F6F5] text-sm text-[#666666]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Works;