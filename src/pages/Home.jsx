import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';

function 首页() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A08060] text-lg md:text-xl font-medium tracking-wider mb-6"
          >
            视觉设计师
          </motion.p>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Hello,我是<br/>肖文瑄
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#666666] text-base md:text-lg mb-10 max-w-md leading-relaxed"
          >
            专注于视觉传达领域，用设计捕捉情绪，传递态度，在每一次创作中打磨细节与质感。
          </motion.p>
          
          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10"
          >
            <div className="text-4xl font-light text-[#333333]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              ^_^
            </div>
          </motion.div>
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/works">
              <Button className="group bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-none transition-all duration-300 flex items-center gap-2">
                查看全部作品
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="h-full w-full">
            <img 
              src="/work4.jpg"
              alt="个人作品"
              className="h-full w-full object-cover"
            />
            {/* Overlay with subtle texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </section>
      
      {/* 简介 Section */}
      <section className="py-24 bg-[#F8F6F5]">
        <div className="container mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                  关于我
                </h2>
                <div className="space-y-6">
                  <p className="text-[#555555] text-lg leading-relaxed">
                    我是一名专注于视觉传达领域的设计师，拥有丰富的设计经验。具备良好的审美能力与视觉叙事能力。
                  </p>
                  <p className="text-[#555555] text-lg leading-relaxed">
                    我擅长视觉创意与平面设计，注重用户体验与视觉呈现，执行力强，习惯用设计捕捉情绪，传递态度，在每一次创作中打磨细节与质感。
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: '经验', value: '5年+' },
                  { label: '作品', value: '50+' },
                  { label: '客户', value: '30+' },
                  { label: '奖项', value: '10+' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 border-t-2 border-[#E0E0E0]"
                  >
                    <div className="text-4xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.value}
                    </div>
                    <div className="text-[#888888] text-sm uppercase tracking-widest">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default 首页;