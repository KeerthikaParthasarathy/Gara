"use client";

import React, { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useApp } from "@/context/AppContext";
import { Calculator, Percent, ShieldAlert } from "lucide-react";

interface MortgageCalculatorProps {
  priceInrCrores: number;
  stateName: string;
}

export function MortgageCalculator({ priceInrCrores, stateName }: MortgageCalculatorProps) {
  const { currency } = useApp();

  const [downPaymentPct, setDownPaymentPct] = useState(40);
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5);

  const stampDutyPct = stateName === "Maharashtra" ? 6.0 : stateName === "Goa" ? 4.5 : stateName === "Delhi NCR" ? 6.0 : 5.0;

  const totalValueInr = priceInrCrores * 10000000;
  const downPaymentAmount = totalValueInr * (downPaymentPct / 100);
  const loanAmount = totalValueInr - downPaymentAmount;

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    loanAmount > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const stampDutyAmount = totalValueInr * (stampDutyPct / 100);

  const formatLakhsCrores = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="border border-graphite-border bg-charcoal p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium">
        <Calculator className="w-4 h-4" />
        <span>Financial Structuring Advisory</span>
      </div>
      <h3 className="text-xl font-serif text-ivory mb-2 font-light">
        Capital & Stamp Duty Estimator
      </h3>
      <p className="text-xs text-stone-400 font-sans mb-6 font-light leading-relaxed">
        Simulate private banking mortgage terms and mandatory statutory acquisition outlays for {stateName}.
      </p>

      <div className="space-y-5 text-xs font-sans">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-stone-300">Equity Contribution ({downPaymentPct}%)</span>
            <span className="text-gold font-medium">{formatLakhsCrores(downPaymentAmount)}</span>
          </div>
          <input
            type="range"
            min="20"
            max="80"
            step="5"
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            className="w-full accent-[#C6A76A] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-stone-300">Mortgage Horizon</span>
            <span className="text-ivory font-medium">{tenureYears} Years ({tenureYears * 12} Months)</span>
          </div>
          <input
            type="range"
            min="5"
            max="25"
            step="5"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full accent-[#C6A76A] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-stone-300">Private Bank Benchmark Rate</span>
            <span className="text-ivory font-medium">{interestRate.toFixed(1)}% p.a.</span>
          </div>
          <input
            type="range"
            min="7.5"
            max="11.5"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-[#C6A76A] cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-graphite-border/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-obsidian border border-graphite-border">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
            Monthly P&I Debt Service
          </span>
          <span className="text-lg font-serif text-gold font-light">
            {formatLakhsCrores(emi)}/mo
          </span>
        </div>

        <div className="p-4 bg-obsidian border border-graphite-border">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
            Est. State Stamp Duty ({stampDutyPct}%)
          </span>
          <span className="text-lg font-serif text-ivory font-light">
            {formatLakhsCrores(stampDutyAmount)}
          </span>
        </div>

        <div className="p-4 bg-obsidian border border-graphite-border">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
            Loan Principal Financed
          </span>
          <span className="text-lg font-serif text-ivory font-light">
            {formatLakhsCrores(loanAmount)}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[10px] text-stone-500 font-sans">
        <ShieldAlert className="w-3.5 h-3.5 text-gold flex-shrink-0" />
        <span>Figures for advisory guidance. Actual stamp duty subject to state collector circle rate index.</span>
      </div>
    </div>
  );
}

export default MortgageCalculator;
