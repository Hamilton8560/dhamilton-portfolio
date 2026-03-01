'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc?: string;
    secondaryImageSrc?: string;
    content?: React.ReactNode;
    reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    content,
    reverseLayout = false,
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
             transition: {
                staggerChildren: 0.2,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

    const hasImages = primaryImageSrc && secondaryImageSrc;

    return (
        <div className="relative overflow-hidden">
            <div className="max-w-6xl w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                     className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
                     variants={containerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                         <div className="space-y-2 md:space-y-1">
                            <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-tight md:leading-[53px]">
                                {title}
                            </h2>
                        </div>

                        <div className="text-zinc-400 text-sm md:text-[15px] leading-6">
                            {description}
                        </div>
                    </motion.div>

                    {/* Mockup / Content Area */}
                    <motion.div
                        className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
                        variants={itemVariants}
                    >
                        {content ? (
                            /* Live content mode */
                            <motion.div
                                className="relative w-full h-[405px] md:h-[637px] rounded-[32px] z-10 overflow-hidden border border-zinc-800/50 shadow-2xl shadow-lime-400/5"
                                initial={{ y: 0 }}
                                whileInView={{ y: 20 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                {content}
                            </motion.div>
                        ) : hasImages ? (
                            /* Image mode */
                            <>
                                <motion.div
                                     className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-zinc-950 rounded-[32px] z-0"
                                     style={{
                                        top: reverseLayout ? 'auto' : '10%',
                                        bottom: reverseLayout ? '10%' : 'auto',
                                        left: reverseLayout ? 'auto' : '-20%',
                                        right: reverseLayout ? '-20%' : 'auto',
                                        transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                                        filter: 'blur(2px)'
                                    }}
                                    initial={{ y: 0 }}
                                    whileInView={{ y: reverseLayout ? -20 : -30 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div
                                        className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                                        style={{
                                            backgroundImage: `url(${secondaryImageSrc})`,
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="relative w-full h-[405px] md:h-[637px] bg-white/[0.04] rounded-[32px] backdrop-blur-[15px] border border-zinc-800/50 z-10 overflow-hidden"
                                    initial={{ y: 0 }}
                                    whileInView={{ y: reverseLayout ? 20 : 30 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="p-0 h-full">
                                        <div className="h-full relative" style={{ backgroundSize: "100% 100%" }}>
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${primaryImageSrc})` }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        ) : null}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};


export default SectionWithMockup;
