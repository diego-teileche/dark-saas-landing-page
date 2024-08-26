import EcosystemIcon from "@/assets/icons/ecosystem.svg"

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
]

export const Features = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <h2>Everything you need</h2>
        <p>
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly
        </p>
        <div>
          {features.map(({ title, description }) => (
            <div key={title}>
              <div>
                <EcosystemIcon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
