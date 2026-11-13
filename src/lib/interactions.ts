import $ from 'jquery';
import { MEDIA_MOBILE } from './breakpoints';

type Cleanup = () => void;

/**
 * Mobile navigation: the hamburger button opens the dropdown menu and dims the
 * page; the close icon, the dimmed overlay, the Escape key or growing the
 * window past the mobile breakpoint all close it again.
 */
export function initMobileMenu(): Cleanup {
  const $header = $('.site-header');
  const $toggle = $header.find('.site-header__toggle');
  const $overlay = $header.find('.site-header__overlay');
  const mobileQuery = window.matchMedia(MEDIA_MOBILE);

  const isOpen = () => $header.hasClass('is-menu-open');

  const setOpen = (open: boolean) => {
    $header.toggleClass('is-menu-open', open);
    $('body').toggleClass('has-menu-open', open);
    $toggle.attr({
      'aria-expanded': String(open),
      'aria-label': open ? 'Close menu' : 'Open menu',
    });
  };

  const onBreakpointChange = (event: MediaQueryListEvent) => {
    if (!event.matches) setOpen(false);
  };

  $toggle.on('click.menu', () => setOpen(!isOpen()));
  $overlay.on('click.menu', () => setOpen(false));
  $(document).on('keydown.menu', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      $toggle.trigger('focus');
    }
  });
  mobileQuery.addEventListener('change', onBreakpointChange);

  return () => {
    $toggle.off('.menu');
    $overlay.off('.menu');
    $(document).off('.menu');
    mobileQuery.removeEventListener('change', onBreakpointChange);
    setOpen(false);
  };
}

/**
 * Pricing page Monthly / Yearly switch. Each price and period element carries
 * both values in data attributes; switching swaps the visible text.
 */
export function initBillingToggle(): Cleanup {
  const $section = $('.pricing-plans');
  const $switch = $section.find('.billing-switch');
  const $labels = $section.find('.billing-toggle__label');

  const setPeriod = (period: 'monthly' | 'yearly') => {
    const yearly = period === 'yearly';
    $switch.attr('aria-checked', String(yearly));
    $labels.each(function () {
      $(this).toggleClass('is-active', $(this).data('period') === period);
    });
    $section.find('[data-monthly]').each(function () {
      const $el = $(this);
      $el.text(String($el.attr(yearly ? 'data-yearly' : 'data-monthly')));
    });
  };

  $switch.on('click.billing', () => {
    setPeriod($switch.attr('aria-checked') === 'true' ? 'monthly' : 'yearly');
  });
  $labels.on('click.billing', function () {
    setPeriod($(this).data('period'));
  });

  return () => {
    $switch.off('.billing');
    $labels.off('.billing');
  };
}

/**
 * "Get an invite", "Read story" and "Pick plan" are anchors that do not lead
 * anywhere yet (per the brief). Stop them jumping to the top of the page.
 */
export function initPlaceholderLinks(): Cleanup {
  $(document).on('click.placeholder', 'a[href="#"]', (event) => {
    event.preventDefault();
  });
  return () => {
    $(document).off('.placeholder');
  };
}
