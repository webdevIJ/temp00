import config from "@/lib/config";
import { Users, TrendingUp, Star, Clock } from "lucide-react";

// Map icon names to components in order
const icons = [Users, TrendingUp, Star, Clock];

export default function StatsBar() {
  return (
    <section className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {config.stats.map(({ value, label }, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={label} className="text-center text-white">
                <Icon className="w-7 h-7 mx-auto mb-2 text-blue-200" />
                <p className="text-3xl font-extrabold">{value}</p>
                <p className="text-blue-200 text-sm mt-1">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
