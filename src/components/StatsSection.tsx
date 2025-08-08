import AnimatedCounter from "./AnimatedCounter";

const stats = [
    { end: 10, suffix: "K+", label: "Testes realizados" },
    { end: 95, suffix: "%", label: "Precisão na recomendação" },
    { end: 5, suffix: " min", label: "Tempo médio para conclusão" },
];

export default function StatsSection() {
    return (
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, i) => (
                <div key={i}>
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    <p className="text-lg text-[#A1A1AA] mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}