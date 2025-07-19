// import { gtag } from 'ga-gtag'

// export const analytics = {
//   pageView: (path: string) => {
//     if (typeof gtag !== 'undefined') {
//       gtag('config', config.ANALYTICS_ID, {
//         page_path: path,
//       })
//     }
//   },

//   event: (action: string, category: string, label?: string, value?: number) => {
//     if (typeof gtag !== 'undefined') {
//       gtag('event', action, {
//         event_category: category,
//         event_label: label,
//         value: value,
//       })
//     }
//   },

//   trackNewsView: (newsId: string, title: string) => {
//     analytics.event('view_news', 'news', `${newsId}-${title}`)
//   },

//   trackSearch: (query: string) => {
//     analytics.event('search', 'user_interaction', query)
//   },
// }