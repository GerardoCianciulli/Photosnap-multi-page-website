import { PLANS, PLAN_FEATURES } from '../data/plans';
import { asset } from '../lib/assets';
import './CompareTable.css';

/** Feature comparison table. On mobile each row reflows into a small grid. */
export function CompareTable() {
  return (
    <section className="compare container" aria-labelledby="compare-title">
      <h2 className="compare__title heading-xl" id="compare-title">
        Compare
      </h2>
      <table className="compare__table">
        <thead>
          <tr>
            <th scope="col">The features</th>
            {PLANS.map((plan) => (
              <th scope="col" key={plan.name}>
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PLAN_FEATURES.map((feature) => (
            <tr key={feature.name}>
              <th scope="row">{feature.name}</th>
              {PLANS.map((plan, index) => (
                <td data-label={plan.name} key={plan.name}>
                  {feature.included[index] ? (
                    <img
                      src={asset('pricing/desktop/check.svg')}
                      alt="Included"
                      width="18"
                      height="15"
                    />
                  ) : (
                    <span className="sr-only">Not included</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
