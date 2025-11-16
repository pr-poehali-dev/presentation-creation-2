import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    type: 'hero',
    title: 'СИСТЕМА БЫСТРЫХ ЗАПУСКОВ',
    subtitle: 'Результат',
    amount: '>57.8 тыс.$',
    description: 'От идеи до первых продаж за 14 дней'
  },
  {
    id: 2,
    type: 'problem',
    title: 'ПРОБЛЕМА',
    subtitle: 'Традиционный запуск продукта',
    problems: [
      { text: 'Долгая разработка', icon: 'Clock' },
      { text: 'Высокие риски', icon: 'AlertTriangle' },
      { text: 'Большие инвестиции', icon: 'DollarSign' },
      { text: 'Неизвестный результат', icon: 'HelpCircle' }
    ],
    solution: 'РЕШЕНИЕ',
    solutionText: 'Система быстрых запусков позволяет тестировать идеи с минимальными затратами и получать результат за 2 недели'
  },
  {
    id: 3,
    type: 'results',
    title: 'РЕЗУЛЬТАТЫ',
    subtitle: 'Достигнутые показатели',
    metrics: [
      { value: '>57.8K$', label: 'Общая выручка', icon: 'TrendingUp' },
      { value: '14 дней', label: 'Средний срок запуска', icon: 'Zap' },
      { value: '8/10', label: 'Успешных запусков', icon: 'Target' },
      { value: '3.5x', label: 'ROI первого месяца', icon: 'BarChart' }
    ]
  },
  {
    id: 4,
    type: 'system',
    title: 'ЭТАПЫ СИСТЕМЫ',
    subtitle: 'Как это работает',
    steps: [
      { number: '01', title: 'Идея', description: 'Формулирование гипотезы и целевой аудитории', icon: 'Lightbulb' },
      { number: '02', title: 'Прототип', description: 'Создание минимальной версии продукта', icon: 'Layers' },
      { number: '03', title: 'Тестирование', description: 'Запуск рекламы и сбор обратной связи', icon: 'TestTube' },
      { number: '04', title: 'Масштабирование', description: 'Развитие успешных направлений', icon: 'Rocket' }
    ]
  },
  {
    id: 5,
    type: 'cta',
    title: 'ГОТОВЫ НАЧАТЬ?',
    subtitle: 'Запустите свой проект сегодня',
    features: [
      'Пошаговая инструкция',
      'Готовые шаблоны',
      'Поддержка на всех этапах'
    ],
    cta: 'НАЧАТЬ ЗАПУСК'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          {slide.type === 'hero' && (
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">{slide.title}</h1>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
                <div className="text-7xl md:text-9xl font-black text-primary">{slide.amount}</div>
                <p className="text-2xl text-muted-foreground">{slide.description}</p>
              </div>
            </div>
          )}

          {slide.type === 'problem' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.problems.map((problem, idx) => (
                  <Card key={idx} className="p-8 border-2 hover:border-primary transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Icon name={problem.icon} size={32} className="text-muted-foreground" />
                      </div>
                      <p className="text-xl font-medium">{problem.text}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-primary/5 border-2 border-primary rounded-lg">
                <h3 className="text-3xl font-bold mb-4 text-primary">{slide.solution}</h3>
                <p className="text-xl leading-relaxed">{slide.solutionText}</p>
              </div>
            </div>
          )}

          {slide.type === 'results' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slide.metrics.map((metric, idx) => (
                  <Card key={idx} className="p-10 border-2 text-center hover:shadow-xl transition-all">
                    <Icon name={metric.icon} size={48} className="text-primary mx-auto mb-6" />
                    <div className="text-5xl md:text-6xl font-black mb-3 text-primary">{metric.value}</div>
                    <p className="text-xl text-muted-foreground">{metric.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'system' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="space-y-6">
                {slide.steps.map((step, idx) => (
                  <Card key={idx} className="p-8 border-2 hover:border-primary transition-all">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl font-black text-primary/20">{step.number}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon name={step.icon} size={28} className="text-primary" />
                          <h3 className="text-3xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-xl text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'cta' && (
            <div className="text-center space-y-12 animate-fade-in">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-6">
                {slide.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-4 text-xl">
                    <Icon name="CheckCircle" size={28} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="text-xl px-12 py-8 h-auto font-bold">
                {slide.cta}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-2"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentSlide ? 'w-12 bg-primary' : 'w-3 bg-muted'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-2"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
