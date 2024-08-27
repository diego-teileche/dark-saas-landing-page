import PlusIcon from "@/assets/icons/plus.svg"
import clsx from "clsx"
import { useState } from "react"

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
]

const AccordionItem = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      key={question}
      className="cursor-pointer border-b border-white/30 py-7"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        <PlusIcon />
      </div>
      <div
        className={clsx("mt-4", {
          hidden: !isOpen,
          "": isOpen === true,
        })}
      >
        {answer}
      </div>
    </div>
  )
}

export const FAQs = () => {
  return (
    <section className="bg-gradient-to-b from-[#5d2cab] to-black py-[72px] text-white">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
