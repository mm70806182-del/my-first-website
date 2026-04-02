import { useState } from 'react'
import SectionTitle from './components/SectionTitle'
import {
  courseDetails,
  differences,
  earlyReasons,
  faqs,
  formFields,
  gaokaoModule,
  outcomes,
  personas,
  scenarioNeeds,
} from './data/content'

function encodeForm(data) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

function App() {
  const [formData, setFormData] = useState({
    parentName: '',
    grade: '',
    phone: '',
    message: '',
    botField: '',
  })
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (formData.botField) {
      return
    }

    setStatus('submitting')
    setSubmitError('')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeForm({
          'form-name': 'trial-booking',
          parentName: formData.parentName,
          grade: formData.grade,
          phone: formData.phone,
          message: formData.message,
          'bot-field': formData.botField,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData({
        parentName: '',
        grade: '',
        phone: '',
        message: '',
        botField: '',
      })
      window.location.assign('/thanks.html')
    } catch (error) {
      setStatus('error')
      setSubmitError('提交暂时没有成功，请稍后重试，或通过电话 / 微信与我们联系。')
    }
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
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-pine-200 bg-pine-50 px-4 py-2 text-sm font-medium text-pine-700">
                面向初二到高三学生的英文表达、讨论、面试与学术适应训练
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                英语成绩不差，
                <span className="block text-pine-700">为什么孩子一到英文面试和讨论就接不住？</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                真正卡住中外合作办学、港中深、综评面试、英文无领导小组讨论和国际化课堂适应的，
                往往不是分数，而是英文输出能力、观点组织能力、临场表达能力和面试应对能力。
                这些，恰恰不是普通英语培训最擅长解决的问题。
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
                  ['很多家庭最后才意识到', '孩子缺的不是学没学英语，而是能不能把英语真正用出来'],
                  ['核心训练', '英文输出 / 无领导讨论 / 英文面试 / 学术适应'],
                  ['为什么要尽早准备', '这类能力无法靠高三临时突击补齐'],
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
                    <p className="text-sm text-slate-300">家长最常见的误判</p>
                    <p className="mt-2 text-lg font-semibold">
                      “孩子英语成绩还不错，应该不用专门练英文表达和面试。”
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
                      因为英文无领导小组讨论、英文面试和学术英文适应，本来就不是普通英语班能顺带解决的问题。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="difference" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionTitle
            eyebrow="Course Difference"
            title="普通英语学习，解决不了所有英文场景。"
            description="很多孩子的问题，不在于没学过英语，而在于没被训练过如何在英文里表达观点、参与讨论、回应追问和稳定输出。真正到了关键场景，这个短板会被一下子放大。"
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
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-iris-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Real Scenarios"
              title="为什么这些真实升学场景，会把孩子的短板放大"
              description="中外合作办学、港中深、综评面试、英文个人面试、无领导小组讨论和国际化课堂适应，看重的都不是单一英语成绩，而是孩子能不能在英文里完成思考、表达、互动和回应。"
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
        </section>

        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle
              eyebrow="Why Now"
              title="为什么建议尽早学，而不是等到高二高三再说"
              description="很多家庭不是不重视，而是重视得太晚。等到申请和面试节点临近，才发现孩子听得懂但说不出来，会做题但不会讨论，这时再补，时间和空间都更紧。"
              light
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {earlyReasons.map((reason) => (
                <div key={reason} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                  <p className="text-base leading-8 text-slate-200">{reason}</p>
                </div>
              ))}
            </div>
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
          </div>
        </section>

        <section className="bg-iris-50/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionTitle
                eyebrow={gaokaoModule.eyebrow}
                title={gaokaoModule.title}
                description={gaokaoModule.description}
              />
              <div className="grid gap-4">
                {gaokaoModule.points.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[24px] border border-iris-100 bg-white p-6 shadow-soft"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-iris-100 font-display text-lg font-bold text-iris-700">
                      0{index + 1}
                    </div>
                    <p className="pt-1 text-lg leading-8 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionTitle
            eyebrow="FAQ"
            title="常见家长问题"
            description="如果您现在最犹豫的是“孩子到底需不需要这种训练”，下面几个问题基本就是家长最常见的卡点。"
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
        </section>

        <section id="contact" className="bg-pine-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sand">Reserve A Trial</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                预约试听或先咨询，
                <span className="block text-pine-200">比起盲目补课，更重要的是先判断孩子到底卡在哪一种能力上。</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-pine-100">
                留下基本信息后，我们会结合学生年级、英语基础、目标路径和当前短板，帮助判断更适合先做英文表达讨论训练，还是先做高考英语提分规划。表单提交后可直接进入 Netlify Forms，便于后续统一跟进和管理。
              </p>
              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-pine-100">建议您咨询时一并说明：</p>
                <ul className="mt-4 space-y-3 text-base text-white/90">
                  <li>孩子当前年级和英语基础</li>
                  <li>是否在考虑港中深、中外合作办学、综评、英文面试或国际化课程路径</li>
                  <li>目前最困扰的问题是“听得懂但说不出来”“有想法但组织不出来”还是“分数也需要提升”</li>
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
              onSubmit={handleSubmit}
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
                  disabled={status === 'submitting'}
                  className="mt-2 rounded-full bg-pine-700 px-6 py-4 text-base font-semibold text-white transition hover:bg-pine-800 disabled:cursor-not-allowed disabled:bg-pine-400"
                >
                  {status === 'submitting' ? '提交中...' : '提交预约信息'}
                </button>
                {status === 'success' ? (
                  <p className="rounded-2xl bg-pine-50 px-4 py-3 text-sm leading-6 text-pine-700">
                    提交成功，正在跳转到感谢页面。
                  </p>
                ) : null}
                {status === 'error' ? (
                  <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                    {submitError}
                  </p>
                ) : null}
                <p className="text-sm leading-6 text-slate-500">
                  表单上线后会直接通过 Netlify Forms 收到提交信息，当前页面已按可部署方案配置完成。
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
          <p>英文无领导小组课程 | 面向初二到高三学生的英文表达、思辨与面试适应训练</p>
        </div>
      </footer>
    </div>
  )
}

export default App
