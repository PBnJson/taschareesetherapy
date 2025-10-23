import Card from "../ui/Card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-white to-sage/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-navy mb-8 text-center">
              About Dr. Sarah Mitchell
            </h1>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <Image
                  src="/images/tascha_black_bg.jpeg"
                  alt="Tascha Reese Therapy"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                  width={300}
                  height={450}
                />
              </div>

              <div className="md:col-span-2 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 font-serif italic">
                  &quot;My calling to work with veterans came from lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Possimus
                  reiciendis odit optio aliquid, voluptatum sint.&quot;
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  I&apos;m Dr. Sarah Mitchell, a licensed clinical psychologist
                  with over 12 years of experience specializing in trauma, PTSD,
                  and veteran mental health. I&apos;ve dedicated my career to
                  creating a safe, understanding space where those who&apos;ve
                  served can find healing without judgment.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  I believe therapy should meet you where you are. That&apos;s
                  why I offer 100% virtual sessions—so you can connect from
                  wherever you feel most comfortable, whether that&apos;s your
                  living room, your car, or a quiet spot outdoors.
                </p>
              </div>
            </div>

            <Card className="mb-12">
              <h2 className="text-3xl font-semibold text-navy mb-6">
                My Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      Person First
                    </h3>
                    <p className="text-gray-600">
                      You matter. You are not your symptoms and I will treat you
                      with respect and dignity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      Culturally Informed
                    </h3>
                    <p className="text-gray-600">
                      Deep understanding of military culture, values, and unique
                      challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      Strength-Based
                    </h3>
                    <p className="text-gray-600">
                      Building resilience and the skills to get you through
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      Compassionate
                    </h3>
                    <p className="text-gray-600">
                      Creating a judgment-free space where you can be yourself
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-3xl font-semibold text-navy mb-6">
                Credentials & Training
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>ABCD Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>Licensed in Texas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>Certified in Cognitive Behavioral Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>Training in.............</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>VA Healthcare Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 mt-1">▸</span>
                  <span>Member of the APA</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
