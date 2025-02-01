import React from "react";
import Plan from "./Plan";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("pricing");

  return (
    <section className="bg-[#f3f3f1] dark:bg-black py-7 dark:border-t border-white">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <span className="font-semibold dark:text-white">
              {t("simple_pricing")}
            </span>
            <h2 className="text-[42px] dark:text-white">
              {t("choose_best_plan")}
            </h2>
            <p className="text-smallest mb-10 dark:text-white">
              {t("coaching_plans_desc")}
            </p>
          </div>
          <div>
            <Plan />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
