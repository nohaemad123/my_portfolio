"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/shared_commponents/service_card/ServiceCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Heading from "@/shared_commponents/heading/Heading";
import { useLanguage } from "../language-provider";

export default function Services() {
  const { locale, setLocale, t } = useLanguage();

  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <Heading
          title={t.services.title}
          description={t.services.description}
        />

        {/* Slider */}

        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => plugin.current.play()}
          opts={{
            align: "start",
            loop: true,
            direction: locale === "ar" ? "rtl" : "ltr",
          }}
        >
          <CarouselContent>
            {servicesData.map((service) => (
              <CarouselItem
                key={service.id}
                className="flex basis-full px-5 sm:basis-1/2 lg:basis-1/4"
              >
                <ServiceCard serviceDetails={service} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
