import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">事務所紹介</h2>
          <p className="mt-4 text-lg text-slate-600">About Us</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">ごあいさつ</h3>
            <p className="text-slate-600 leading-relaxed flex-grow">
              はじめまして。代表の◯◯ ◯◯です。
              <br/><br/>
              企業の成長には、従業員が安心して働ける環境が不可欠です。
              <br/>
              しかし、複雑化する労働法規や社会保険制度に、頭を悩ませる経営者様も少なくありません。
              <br/>
              私たちは、そんな経営者様の「身近な相談相手」として、人事・労務に関するあらゆる課題解決をサポートいたします。
              <br/><br/>
              どんな些細なことでも、お気軽にご相談ください。
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">事務所概要</h3>
            <div className="space-y-4">
              <div className="flex border-b pb-2">
                <dt className="w-1/3 font-semibold text-slate-700">名称</dt>
                <dd className="w-2/3 text-slate-600">◯◯社会保険労務士事務所</dd>
              </div>
              <div className="flex border-b pb-2">
                <dt className="w-1/3 font-semibold text-slate-700">所在地</dt>
                <dd className="w-2/3 text-slate-600">
                  〒XXX-XXXX
                  <br />
                  東京都◯◯区◯◯ X-X-X
                </dd>
              </div>
              <div className="flex border-b pb-2">
                <dt className="w-1/3 font-semibold text-slate-700">営業時間</dt>
                <dd className="w-2/3 text-slate-600">平日 9:00〜18:00</dd>
              </div>
              <div className="flex border-b pb-2">
                <dt className="w-1/3 font-semibold text-slate-700">所属社労士会</dt>
                <dd className="w-2/3 text-slate-600">◯◯社会保険労務士会</dd>
              </div>
              <div className="flex">
                <dt className="w-1/3 font-semibold text-slate-700">登録番号</dt>
                <dd className="w-2/3 text-slate-600">第XXXXXX号</dd>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;
