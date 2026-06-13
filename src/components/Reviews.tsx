import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Howard Ragazzo",
    text: "Absolute professionalism. Maria is always on your side and does whatever it takes to help you find the right home.",
  },
  {
    name: "Deryan Baltazar",
    text: "She went the extra mile for our family and ended what felt like a never-ending home hunt. Highly recommended!",
  },
  {
    name: "Veronica Ragazzo",
    text: "Excellent and highly knowledgeable. If you're looking in Orlando, she is absolutely the one to call.",
  },
  {
    name: "Ramon Fuentes",
    text: "Superb service from start to move-in. Her market insights helped us land a fantastic deal and fair terms.",
  },
  {
    name: "Pamela Nardinocchi",
    text: "I am consistently impressed by her team's professionalism, quick responsiveness, and sharp attention to detail.",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#0d285a] rounded-2xl p-6 lg:p-10 border border-gold/20 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gold text-xs uppercase font-bold tracking-widest">Client Feedback</h3>
        <div className="flex items-center gap-2">
           <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
           </div>
           <span className="text-xs font-medium text-slate-300">4.6/5 Average</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-navy/40 p-5 rounded-xl border-l-2 border-gold flex flex-col"
          >
            <p className="text-xs italic text-slate-300 leading-relaxed mb-4 flex-1">
              "{review.text}"
            </p>
            <p className="text-[10px] font-bold text-gold uppercase tracking-wider">— {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
