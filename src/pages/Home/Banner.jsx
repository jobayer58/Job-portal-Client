import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 10 ,repeat: Infinity}}
                            src={team1}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-[#0d6efd] shadow-2xl" />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 5 ,delay: 5 , repeat: Infinity}}
                            src={team2}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-[#0d6efd] shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <motion.h1
                            animate={{ x: 50 }}
                            transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                            className="text-5xl font-bold">Latest <motion.span
                                animate={{ color: ['#3355ff', '#33ff4c', '#b233ff'] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >Jobs</motion.span> For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;