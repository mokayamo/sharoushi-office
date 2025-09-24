import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const faqs = [
    {
      question: 'Q. 初回相談は無料ですか？',
      answer: '初回相談（1時間程度）は無料で承っております。\nお気軽にお問い合わせください。'
    },
    {
      question: 'Q. 相談方法はどのような形式がありますか？',
      answer: 'お電話、メール、オンライン会議（Zoom等）から選択いただけます。'
    },
    {
      question: 'Q. 対応可能な地域はどこまでですか？',
      answer: '基本的にはオンラインなので、全国対応しております。'
    },
    {
      question: 'Q. 料金の支払い方法を教えてください。',
      answer: '銀行振込でのお支払いに対応しております。'
    },
    {
      question: 'Q. 急ぎの案件にも対応してもらえますか？',
      answer: '緊急性の高い案件については、可能な限り迅速に対応いたします。\nまずはご相談ください。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="py-24 bg-secondary min-h-screen flex items-start">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">よくあるご質問</h2>
          <p className="mt-4 text-lg text-slate-600">Common Questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors bg-white"
              >
                <div className="flex items-start">
                  <p className="text-slate-700 text-lg font-medium">{faq.question}</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`h-5 w-5 text-slate-500 transform transition-transform ${
                      openIndexes.has(index) ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndexes.has(index) && (
                <div className="px-6 py-6 bg-slate-200">
                  <div className="flex items-center">
                    <span className="font-medium text-slate-700 text-base mr-2">A.</span>
                    <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line flex-1">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
