import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end, suffix, decimals }: { end: number, suffix: string, decimals?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1 }}
        >
            <CountUp 
                end={end} 
                duration={2.5}
                separator="."
                decimal=','
                decimals={decimals || 0}
                suffix={suffix}
                enableScrollSpy={true}
                scrollSpyDelay={300}
            >
                {({ countUpRef }) => (
                    <span ref={countUpRef} className="text-5xl md:text-6xl font-bold text-white" />
                )}
            </CountUp>
        </motion.div>
    );
};

export default AnimatedCounter;