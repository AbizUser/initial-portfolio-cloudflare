import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Project 1', description: 'Description of project 1', url: 'https://web-app-practice-alpha.vercel.app' },
          { title: 'Project 2', description: 'Description of project 2', url: 'https://commerce-app-practice.vercel.app' },
        ].map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <Link href={project.url!} target='blank'>
                  <Button className="mt-4">View Project</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  )}
export default Projects