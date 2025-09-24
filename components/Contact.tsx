import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    // For this static example, we'll just log it and show an alert.
    console.log('Form Data Submitted:', formData);
    alert('お問い合わせありがとうございます。内容を確認し、2営業日以内に折り返しご連絡いたします。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white min-h-screen flex items-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">お問い合わせ</h2>
          <p className="mt-4 text-lg text-slate-600">Contact Us</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">お問い合わせ</h3>
            <p className="text-slate-600 mb-6">まずはお気軽にご相談ください。</p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">◯◯社会保険労務士事務所</h4>
                <div className="space-y-2 text-slate-600">
                  <p>
                    〒XXX-XXXX
                    <br />
                    東京都◯◯区◯◯ X-X-X
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="space-y-1 text-slate-600">
                  <p>所属社労士会: ◯◯社会保険労務士会</p>
                  <p>登録番号: 第XXXXXX号</p>
                </div>
              </div>
            </div>
            <p className="text-slate-500 mt-6 text-sm">ご相談受付: 24時間対応（返信は平日 9:00〜18:00）</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">お名前<span className="text-red-500">*</span></label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">メールアドレス<span className="text-red-500">*</span></label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">ご相談内容<span className="text-red-500">*</span></label>
                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Contact;
