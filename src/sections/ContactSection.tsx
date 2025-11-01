import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen bg-[hsl(var(--deep-gray))] py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-[hsl(var(--text-secondary))]">
            Ready to experience excellence?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 theme-text mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-[hsl(var(--text-secondary))]">contact@supercars.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 theme-text mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-[hsl(var(--text-secondary))]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 theme-text mt-1" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-[hsl(var(--text-secondary))]">
                    123 Performance Drive<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[hsl(var(--matte-black))] border border-[hsl(var(--border))] rounded-lg focus:border-[rgb(var(--theme-rgb))] focus:outline-none transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[hsl(var(--matte-black))] border border-[hsl(var(--border))] rounded-lg focus:border-[rgb(var(--theme-rgb))] focus:outline-none transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[hsl(var(--matte-black))] border border-[hsl(var(--border))] rounded-lg focus:border-[rgb(var(--theme-rgb))] focus:outline-none transition-smooth resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 font-bold uppercase tracking-wider text-black transition-smooth"
                style={{ backgroundColor: `rgb(var(--theme-rgb))` }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20 text-[hsl(var(--text-muted))] text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2024 Supercars Showcase. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
