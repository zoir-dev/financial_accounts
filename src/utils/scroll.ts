export const scrollToElement = (id?: string) => {
  const element = document.getElementById(id || "contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
