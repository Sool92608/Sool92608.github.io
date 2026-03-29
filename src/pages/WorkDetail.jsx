import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getWorkById, works } from '../data/mockData';

function WorkDetail() {
  const { id } = useParams();
  const work = getWorkById(id);
  
  if (!work) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">作品不存在</h1>
          <Link to="/works">
            <button className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#333333] transition-colors">
              返回作品列表
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = works.findIndex(w => w.id === id);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Header with back button */}
      <section className="pt-32 pb-10">
        <div className="px-8 md:px-16">
          <Link to="/works" className="inline-flex items-center gap-2 text-[#888888] hover:text-[#1A1A1A] transition-colors">
            <ArrowLeft size={20} />
            <span>返回作品列表</span>
          </Link>
        </div>
      </section>

      {/* Work Content */}
      <section className="pb-24">
        <div className="px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Work Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[60vh] object-cover"
              />
            </motion.div>

            {/* Title and Description */}
            <div className="max-w-4xl mx-auto mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {work.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-[#555555] leading-relaxed"
              >
                {work.description}
              </motion.p>
            </div>

            {/* Gallery - if available */}
            {work.gallery && work.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  作品展示
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {work.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <img
                        src={img}
                        alt={`${work.title} - ${index + 1}`}
                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Design Process - for Poster Design */}
            {work.designProcess && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-4xl mx-auto mb-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      设计理念
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.designProcess.concept}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      排版设计
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.designProcess.typography}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      色彩方案
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.designProcess.colorScheme}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      布局说明
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.designProcess.layout}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Packaging Details - for Packaging Design */}
            {work.packagingDetails && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-4xl mx-auto mb-16"
              >
                <div className="space-y-12">
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      材质说明
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.packagingDetails.material}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      结构设计
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.packagingDetails.structure}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      品牌理念
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.packagingDetails.brandStory}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VI System - for Brand Design */}
            {work.viSystem && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-4xl mx-auto mb-16"
              >
                <div className="space-y-12">
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Logo设计
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.viSystem.logo}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      色彩系统
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.viSystem.colorPalette}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      字体系统
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {work.viSystem.typography}
                    </p>
                  </div>
                  <div className="border-t-2 border-[#E0E0E0] pt-8">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      应用场景
                    </h3>
                    <ul className="text-[#666666] space-y-2">
                      {work.viSystem.applications.map((app, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#1A1A1A] rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="bg-[#F8F6F5] p-10">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  项目详情
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-[#888888] mb-2">分类</p>
                    <p className="text-[#1A1A1A]">{work.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-2">日期</p>
                    <p className="text-[#1A1A1A]">{work.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-2">客户</p>
                    <p className="text-[#1A1A1A]">{work.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-2">工具</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white text-[#666666] text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-wrap gap-3">
                {work.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-[#F8F6F5] text-[#666666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-[#F8F6F5]">
        <div className="px-8 md:px-16">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {prevWork && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/works/${prevWork.id}`}
                  className="flex items-center gap-3 text-[#666666] hover:text-[#1A1A1A] transition-colors"
                >
                  <ArrowLeft size={20} />
                  <div>
                    <div className="text-sm text-[#888888]">上一个作品</div>
                    <div className="font-semibold">{prevWork.title}</div>
                  </div>
                </Link>
              </motion.div>
            )}
            {!prevWork && <div className="w-1/3"></div>}
            
            {nextWork && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 text-[#666666] hover:text-[#1A1A1A] transition-colors"
              >
                <Link to={`/works/${nextWork.id}`} className="text-right">
                  <div className="text-sm text-[#888888]">下一个作品</div>
                  <div className="font-semibold">{nextWork.title}</div>
                </Link>
                <ArrowLeft size={20} className="rotate-180" />
              </motion.div>
            )}
            {!nextWork && <div className="w-1/3"></div>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkDetail;
