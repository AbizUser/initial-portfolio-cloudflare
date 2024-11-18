import React from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const Skills = () => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {['RPA','Python','VBA','Next.js','JavaScript', 'React', 'Node.js', 'HTML/CSS'].map((skill) => (
          <Card key={skill}>
            <CardHeader>
              <CardTitle>{skill}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills
