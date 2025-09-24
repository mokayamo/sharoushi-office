import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    '社員を初めて採用する際の社会保険手続きについて知りたい。',
    '会社のルールを明確にするため、就業規則を新しく作成したい。',
    '自社で使える助成金があるか、対象になるかを確認してほしい。',
    '残業時間の計算方法や有給休暇の正しい管理方法がわからない。',
    '従業員との間でトラブルが発生してしまった場合の対応を相談したい。',
    'パート・アルバイトの労働条件について、法律上の注意点を知りたい。',
  ];

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">よくあるご質問</h2>
          <p className="mt-4 text-lg text-slate-600">Common Questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                   <svg className="h-6 w-6 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
                <p className="ml-4 text-slate-700 text-lg">{faq}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
