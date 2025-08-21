import { ImageAnimation } from "../ui/imageAnimation"

export const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a passionate software developer with over 5 years of experience working on scalable web applications, building intuitive user interfaces, and developing robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I truly believe that software development is one of the most rewarding types of work because you get the instant feedback of seeing your code working live, so I'm always excited to take on new projects.
                I see coding as an open-world game, where there are multiple paths to a solution, and it's up to the player to find the most effective one. 
                This mindset became a passion for me, and now I have a long-term goal of someday developing my own web app, mobile app, or game. To achieve this, I stay motivated and eager to learn and gain new experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy building custom keyboards. One piece of advice I have for keeping coding fresh, aside from learning new skills, is to build your own custom keyboard. 
                It can completely change your typing experience. And yes, I'm using this as an excuse to show off some of mine.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-[350px_350px]">
            <ImageAnimation base="/images/fukurou-front.jpg" hover="/images/fukurou-back.jpg" name="Fukurou" />
            <ImageAnimation base="/images/mode65-front.jpg" hover="/images/mode65-back.jpg" name="Mode65" />
            <ImageAnimation base="/images/tkl-front.jpg" hover="/images/tkl-back.jpg" name="ClassicTKL" />
            <ImageAnimation base="/images/zoom75-front.jpg" hover="/images/zoom75-back.jpg" name="Zoom75" />
          </div>
        </div>
      </div>
    </section>
  )
}