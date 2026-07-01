import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    category: "Artificial Intelligence",
    skills: [
      { name: "Artificial Intelligence", level: 95 },
      { name: "Machine Learning", level: 92 },
      { name: "Deep Learning", level: 90 },
      { name: "Computer Vision", level: 90 },
      { name: "YOLO", level: 85 },
      { name: "TensorFlow", level: 88 },
    ],
  },
  {
    category: "Software Development",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 95 },
      { name: "Firebase", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Agricultural Engineering",
    skills: [
      { name: "Precision Agriculture", level: 95 },
      { name: "Digital Agriculture", level: 95 },
      { name: "Farm Mechanization", level: 90 },
      { name: "GIS & Remote Sensing", level: 85 },
      { name: "Climate Smart Agriculture", level: 90 },
      { name: "Renewable Energy", level: 88 },
    ],
  },
  {
    category: "Leadership",
    skills: [
      { name: "Research", level: 95 },
      { name: "Project Management", level: 90 },
      { name: "Entrepreneurship", level: 95 },
      { name: "Innovation", level: 95 },
      { name: "Public Speaking", level: 88 },
      { name: "Leadership", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
          description="A combination of Artificial Intelligence, Agricultural Engineering, Software Development, and Leadership that enables me to build impactful technologies for Africa."
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-8">
                {category.category}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">
                        {skill.name}
                      </span>

                      <span className="text-green-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-3 bg-green-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}