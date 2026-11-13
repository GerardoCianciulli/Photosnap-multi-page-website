import { useEffect } from 'react';
import { PLANS } from '../data/plans';
import { INVITE_HREF } from '../data/navigation';
import { initBillingToggle } from '../lib/interactions';
import './PricingPlans.css';

/**
 * Monthly / Yearly switch and the three plan cards. The switch itself is
 * driven by jQuery (see initBillingToggle); prices carry both values as data
 * attributes so the swap is a plain text change.
 */
export function PricingPlans() {
  useEffect(() => initBillingToggle(), []);

  return (
    <section className="pricing-plans container" aria-label="Pricing plans">
      <div className="billing-toggle">
        <span className="billing-toggle__label is-active" data-period="monthly" aria-hidden="true">
          Monthly
        </span>
        <button
          className="billing-switch"
          type="button"
          role="switch"
          aria-checked="false"
          aria-label="Yearly billing"
        >
          <span className="billing-switch__thumb" />
        </button>
        <span className="billing-toggle__label" data-period="yearly" aria-hidden="true">
          Yearly
        </span>
      </div>

      <ul className="plans" role="list">
        {PLANS.map((plan) => (
          <li className={`plan${plan.featured ? ' plan--featured' : ''}`} key={plan.name}>
            <div className="plan__intro">
              <h2 className="heading-m">{plan.name}</h2>
              <p className="plan__description text-muted">{plan.description}</p>
            </div>
            <div className="plan__price" aria-live="polite">
              <p className="plan__amount" data-monthly={plan.monthly} data-yearly={plan.yearly}>
                {plan.monthly}
              </p>
              <p className="plan__period text-muted" data-monthly="per month" data-yearly="per year">
                per month
              </p>
            </div>
            <a
              className={`plan__cta btn ${plan.featured ? 'btn--light' : 'btn--dark'}`}
              href={INVITE_HREF}
            >
              Pick plan
              <span className="sr-only"> {plan.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
