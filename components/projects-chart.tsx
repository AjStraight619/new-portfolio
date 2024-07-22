'use client';
import React, { ReactElement, useCallback } from 'react';
import { SiTypescript, SiGo, SiJavascript, SiCss3 } from 'react-icons/si';
import { Pie, PieChart, Cell } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type ProjectsChartProps = {
  languages: { [key: string]: number };
};

const langMap: {
  [key: string]: {
    icon: React.ComponentType;
    color: string;
  };
} = {
  TypeScript: {
    icon: SiTypescript,
    color: '#3178c6',
  },
  JavaScript: {
    icon: SiJavascript,
    color: '#f7df1e',
  },
  Go: {
    icon: SiGo,
    color: '#00add8',
  },
  CSS: {
    icon: SiCss3,
    color: '#264de4',
  },
};

const ProjectsChart = ({ languages }: ProjectsChartProps) => {
  const generateChartConfig = useCallback((): ChartConfig => {
    const config: ChartConfig = {};

    Object.entries(languages).forEach(([language]) => {
      if (langMap[language]) {
        config[language] = {
          icon: langMap[language].icon,
          color: langMap[language].color,
        };
      }
    });
    return config satisfies ChartConfig;
  }, [languages]);

  const generateChartData = useCallback(() => {
    return Object.entries(languages).map(([language, percent]) => ({
      language,
      percent,
    }));
  }, [languages]);

  const chartConfig = generateChartConfig();
  const chartData = generateChartData();

  return (
    <div className="hidden md:block">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Languages</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie data={chartData} dataKey="percent" nameKey="language">
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartConfig[entry.language]?.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex flex-wrap gap-2">
            {chartData.map(({ language, percent }, index) => (
              <div key={index} className="flex items-center gap-1">
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ backgroundColor: chartConfig[language]?.color }}
                />
                <span>{`${language}: ${percent.toFixed(2)}%`}</span>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectsChart;
