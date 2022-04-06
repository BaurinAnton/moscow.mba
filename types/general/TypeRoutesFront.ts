type TypeRoutesFront = {
  root: 'http://localhost:3000' | 'https://moscow.mba'
  home: '/'
  about: '/about'
  teachers: '/teachers'
  contact: '/contact'
  corporateClients: '/corporate-clients'
  legal: '/legal'
  payment: '/payment'
  promo: '/promo'
  journal: '/journal'
  journalCategory: '/journal/[journalCategory]'
  journalCategoryTag: '/journal/[journalCategory]/[journalTag]'
  journalCategoryTagArticle: '/journal/[journalCategory]/[journalTag]/[journalArticle]'
  webinars: '/webinars'
  webinarsArchive: '/webinars/archive'
  webinarsUpcoming: '/webinars/upcoming'
  programs: '/programs'
  program: '/programs/[type]/[format]/[slug]'
  programsExecutive: '/programs/executive'
  programsInternationalBusinessLaw: '/programs/international-business-law'
  programsMba: '/programs/mba'
  programsMini: '/programs/mini'
  programsProfession: '/programs/profession'
  programsMbaOnline: '/programs/mba/online'
  programsMbaBlended: '/programs/mba/blended'
  programsMiniOnline: '/programs/mini/online'
  programsMiniBlended: '/programs/mini/blended'
  programsProfessionOnline: '/programs/profession/online'
  teachersTeacher: '/teachers/[teacher]'
}

export default TypeRoutesFront
