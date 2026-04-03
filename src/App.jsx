import { useState } from 'react'
import SectionTitle from './components/SectionTitle'
import {
  courseDetails,
  differences,
  earlyReasons,
  faqs,
  formFields,
  outcomes,
  personas,
  scenarioNeeds,
} from './data/content'

function InlineCta({ href = '#contact', label = '预约咨询' }) {
  return (
    <div className="mt-8">
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-pine-200 bg-white/90 px-5 py-3 text-sm font-semibold text-pine-800 transition hover:border-pine-400 hover:bg-pine-50"
      >
        {label}
      </a>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    parentName: '',
    grade: '',
    phone: '',
    message: '',
    botField: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-mist text-slate-800">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="font-display text-lg font-extrabold tracking-wide text-ink">
              Trinity Edubridge International
            </p>
            <p className="mt-1 text-sm text-slate-500">三壹桥（深圳）国际教育有限公司</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-pine-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine-800"
          >
            预约试听
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grain" />
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full border border-pine-200/70" />
          <div className="absolute right-[-40px] top-28 h-32 w-72 rounded-full border border-iris-200/60" />
          <div className="absolute bottom-10 left-1/3 h-px w-52 bg-gradient-to-r from-transparent via-pine-300 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-pine-200 bg-pine-50 px-4 py-2 text-sm font-medium text-pine-700">
                面向高一到高三学生的英文表达、讨论、辩论、面试与学术适应训练
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                英语成绩不差，
                <span className="block text-pine-700">为什么孩子一到英文面试和讨论就接不住？</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                卡住孩子的，往往不是分数，而是英文输出、逻辑表达、临场应对和观点组织。
                真到综评面试、英文面试、无领导小组讨论这类场景，这个短板会一下子暴露出来；
                而底层能力拉起来之后，英语听力、英语作文、校内英语和高考英语成绩也会一起提升。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-pine-700 px-7 py-4 text-center text-base font-semibold text-white transition hover:bg-pine-800"
                >
                  预约试听
                </a>
                <a
                  href="#difference"
                  className="rounded-full border border-slate-300 px-7 py-4 text-center text-base font-semibold text-slate-700 transition hover:border-pine-300 hover:text-pine-700"
                >
                  先了解课程差异
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['家长最容易误判', '把英语分数当成了英文能力'],
                  ['我们真正训练', '表达 / 讨论 / 思辨 / 面试 / 学术适应'],
                  ['为什么要尽早', '越晚补，越贵、越累、越难稳'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-soft">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-2 text-base font-semibold text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-[32px] border border-white/70 bg-slate-950 p-8 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-sand">课程定位</p>
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl bg-white/8 p-5">
                    <p className="text-sm text-slate-300">很多家庭的问题</p>
                    <p className="mt-2 text-lg font-semibold">
                      不是不重视英语，而是重视了分数，却轻了输出能力。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-iris-500/15 p-5">
                    <p className="text-sm text-slate-300">真正的能力门槛</p>
                    <p className="mt-2 text-lg font-semibold">
                      听得懂，不等于说得出；会做题，不等于会讨论；有基础，不等于能面试。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-pine-500/15 p-5">
                    <p className="text-sm text-slate-300">这门课为什么存在</p>
                    <p className="mt-2 text-lg font-semibold">
                      因为这些能力，本来就不是普通英语学习能顺带解决的问题。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="difference" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="absolute right-10 top-14 hidden h-20 w-20 rounded-full border border-pine-200 lg:block" />
          <SectionTitle
            eyebrow="Course Difference"
            title="普通英语学习，和真正的英文能力训练，不是一回事。"
            description="一眼看懂差别。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {differences.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-[28px] border p-8 shadow-soft ${
                  index === 0 ? 'border-slate-200 bg-white' : 'border-pine-200 bg-pine-50/70'
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-ink">{group.title}</h3>
                <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className={`mt-2 h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-slate-300' : 'bg-pine-600'}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <InlineCta label="预约试听" />
        </section>

        <section className="relative bg-white">
          <div className="absolute left-0 top-20 h-px w-48 bg-gradient-to-r from-pine-200 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Real Scenarios"
              title="为什么这些真实升学场景，会把孩子的短板放大"
              description="港中深、宁诺、西交利物浦、昆山杜克、上纽大，以及各类综评、英文面试、国际化课堂场景，真正抬高门槛的都不是单一成绩。"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {scenarioNeeds.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-mist p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine-700">Real Need</p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <InlineCta />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Who It's For"
              title="适合什么样的孩子"
              description="如果下面这些情况，家长一看就觉得“这说的就是我家孩子”，那这门课就值得尽早安排。"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {personas.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-mist p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pine-700 font-display text-lg font-bold text-white">
                    {item.title.slice(0, 1)}
                  </div>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
            <InlineCta label="预约试听" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionTitle
              eyebrow="Learning Outcome"
              title="这门课，具体帮孩子解决什么问题"
              description="我们不做夸大承诺，但会把最容易卡住孩子的几个关键问题拆开训练，让能力变化更具体、更可感。"
            />
            <div className="grid gap-4">
              {outcomes.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-iris-100 font-display text-lg font-bold text-iris-700">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-lg leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <InlineCta />
        </section>

        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute right-[-40px] top-10 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute left-10 top-32 h-px w-36 bg-gradient-to-r from-white/5 via-sand/60 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Why Now"
              title="我们做的，不是一种学法，而是一套分阶段课程体系"
              description="高一、高二有高一、高二的训练路径。越早开始，越容易把英文能力整体拉起来。高三则有高三的针对性冲刺安排。"
              light
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {earlyReasons.map((reason) => (
                <div key={reason} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                  <p className="text-base leading-8 text-slate-200">{reason}</p>
                </div>
              ))}
            </div>
            <InlineCta label="预约咨询" />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Class Format"
              title="课程形式与上课方式"
              description="课程更看重孩子有没有真正练到，而不是上了多少节课。我们会把课堂做成可讨论、可回应、可复盘的真实训练场。"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {courseDetails.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-mist p-8">
                  <h3 className="font-display text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <InlineCta />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionTitle
            eyebrow="FAQ"
            title="常见家长问题"
            description="如果您现在还在犹豫，通常卡的就是下面这几个问题。"
          />
          <div className="mt-10 grid gap-5">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
                <summary className="cursor-pointer list-none pr-10 text-lg font-semibold text-ink marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
          <InlineCta label="预约试听" />
        </section>

        <section id="contact" className="bg-pine-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sand">Reserve A Trial</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                预约试听或先咨询，
                <span className="block text-pine-200">先判断孩子卡的是分数表象，还是更底层的英文输出能力。</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-pine-100">
                留下基本信息后，我们会结合学生年级、英语基础、目标路径和当前短板，判断是否适合先做表达、讨论、面试与学术适应训练，以及这类训练怎样反向带动校内英语和高考英语表现。
              </p>
              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-pine-100">建议您咨询时一并说明：</p>
                <ul className="mt-4 space-y-3 text-base text-white/90">
                  <li>孩子当前年级和英语基础</li>
                  <li>是否在考虑港中深、中外合作办学、综评、英文面试或国际化课程路径</li>
                  <li>目前最困扰的问题是“听得懂但说不出来”还是“有想法但组织不出来”</li>
                </ul>
              </div>
            </div>

            <form
              className="rounded-[32px] bg-white p-7 text-slate-800 shadow-soft sm:p-8"
              name="trial-booking"
              method="POST"
              action="/thanks.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="trial-booking" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input
                    name="bot-field"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, botField: event.target.value }))
                    }
                  />
                </label>
              </p>
              <div className="grid gap-5">
                {formFields.map((field) => (
                  <label key={field.label} className="grid gap-2">
                    <span className="text-sm font-semibold text-slate-700">{field.label}</span>
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base outline-none transition focus:border-pine-500 focus:bg-white"
                    />
                  </label>
                ))}

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700">想重点了解的问题</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="例如：孩子平时阅读还可以，但英文讨论时不太会组织观点，希望了解是否适合先试听。"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base outline-none transition focus:border-pine-500 focus:bg-white"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 rounded-full bg-pine-700 px-6 py-4 text-base font-semibold text-white transition hover:bg-pine-800"
                >
                  提交预约信息
                </button>
                <p className="text-sm leading-6 text-slate-500">
                  提交后会直接跳转到感谢页，信息将进入 Netlify Forms，便于后续统一跟进和管理。
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-display text-base font-bold text-ink">Trinity Edubridge International</p>
            <p className="mt-1">三壹桥（深圳）国际教育有限公司</p>
          </div>
          <p>英文无领导小组课程 | 面向高一到高三学生的英文表达、思辨与面试适应训练</p>
        </div>
      </footer>
    </div>
  )
}

export default App
