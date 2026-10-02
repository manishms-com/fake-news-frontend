import { Link } from "react-router-dom";
import {
    FiActivity,
    FiArrowUpRight,
    FiBookOpen,
    FiCheckCircle,
    FiCompass,
    FiSearch,
} from "react-icons/fi";

const features = [
    {
        number: "01",
        icon: FiSearch,
        title: "A clearer first look",
        description:
            "Bring a claim into focus and get a quick, readable starting point for understanding what it says.",
        accent: "from-violet-500/20 to-indigo-500/5",
    },
    {
        number: "02",
        icon: FiCheckCircle,
        title: "Evidence over noise",
        description:
            "Put context and supporting information ahead of sensational headlines and snap judgments.",
        accent: "from-cyan-500/20 to-blue-500/5",
    },
    {
        number: "03",
        icon: FiBookOpen,
        title: "Made to be understood",
        description:
            "Straightforward explanations help make the details behind a claim easier to follow.",
        accent: "from-fuchsia-500/20 to-pink-500/5",
    },
    {
        number: "04",
        icon: FiCompass,
        title: "Think critically, together",
        description:
            "Use each result as a guide for asking better questions and checking information for yourself.",
        accent: "from-amber-500/20 to-orange-500/5",
    },
];

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">


            <section className="py-14 sm:py-20">
                <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-800">
                            What guides us
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Better tools for a noisy world.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-700 sm:text-base">
                        Four simple principles shape how we help you make sense
                        of what you read.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {features.map(({ number, icon: Icon, title, description, accent }) => (
                        <article
                            key={number}
                            className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/25 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7"
                        >
                            <div
                                aria-hidden="true"
                                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-linear-to-br ${accent} blur-2xl transition duration-300 group-hover:scale-125`}
                            />
                            <div className="relative flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/50 text-xl text-violet-800 shadow-sm">
                                    <Icon aria-hidden="true" />
                                </div>
                                <span className="font-mono text-xs tracking-widest text-slate-500">
                                    {number}
                                </span>
                            </div>
                            <h3 className="relative mt-8 text-lg font-semibold text-slate-900">
                                {title}
                            </h3>
                            <p className="relative mt-3 text-sm leading-7 text-slate-700">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="glass-panel flex flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div>
                    <p className="text-lg font-semibold text-slate-900">
                        Stay curious. Check the context.
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                        Start with a claim and take a closer look.
                    </p>
                </div>
                <Link
                    to="/"
                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/60 bg-white/40 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white/70  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
                >
                    Explore the checker
                    <FiArrowUpRight aria-hidden="true" />
                </Link>
            </section>
        </div>
    );
}