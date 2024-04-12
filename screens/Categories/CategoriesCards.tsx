import React, { memo } from "react";
import ac from "./img/PICS/ac.jpg";
// import bl from "./img/PICS/build.jpg";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import { Container } from "../../components/Shared";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { BorderlessButton } from "react-native-gesture-handler";

type Home = {
  name: string;
  image?: string;
  link?: string;
};

const items: Home[] = [
  {
    name: "Home cleaning",
    link: "Home Services",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "AC cleaning",
    link: "Ac Cleaning",
    image:
      "https://img.freepik.com/premium-vector/engineer-fixing-cleaning-air-conditioner-living-room-repairman-repairing-ac-heating-cooling-system-unit-home-flat-vector-illustration-repair-service-hvac-technology-concept_778687-1608.jpg",
  },
  {
    name: "Deep cleaning",
    link: "Deep Cleaning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmEElzlfJMdqVO7DiJWLuvkuP2WzfK_WmLw&usqp=CAU",
  },
  {
    name: "Sofa cleaning",
    link: "Sofa Cleaning",
    image:
      "https://elements-cover-images-0.imgix.net/f96c8c19-5d5d-4712-948f-cc34db6fdb5e?q=80&w=316&fit=max&fm=jpeg&s=ba7555ecd1aebd889272f89cce9dd6de",
  },
  {
    name: "Carpet cleaning",
    link: "Carpet Cleaning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk7fvefZ7tytHpNM2-FsEeeP1ahfOzrnv3Uu5NoLBwn7-A7p_FyP6_8Iv2jKW60eUabQ&usqp=CAU",
  },
  {
    name: "Car Services",
    link: "Car Services",
    image:
      "https://5.imimg.com/data5/LV/AF/HD/SELLER-12008754/car-repair-service.png",
  },
];
const Cars: Home[] = [
  {
    name: "Car Wash",
    link: "Car Wash",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKFiPUK5ip1If-2i-T1OGBEQ-5n-QpBTvsw&usqp=CAU",
  },
  {
    name: "Battrey Change",
    link: "Battrey Change",
    image:
      "https://assets.shriramgi.com/webassets/blogs/19748417-9733-42d8-ac6b-e9046fbafea3_electric-vehicle-battery-insurance-coverage.png",
  },
  {
    name: "Car Tower",
    link: "Battrey Change",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZShCFaC0cgt2qBvXXfNORtgtluY40Dda-_w&usqp=CAU",
  },
];

const Resturants: Home[] = [
  {
    name: "Eastgate Resturant",
    link: "Eastgate Resturant",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "Kampala Uganda",
    link: "Kampala Uganda",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "Kenzi Palance",
    link: "Kampala Uganda",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
];

const Beauty: Home[] = [
  {
    name: "Women Saloon",
    link: "Women Saloon",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUSExIVEhUTFhUXFRUWFhgWGBgWGBYWFxgYFRUYHSggGBolHRUVITEjJSkrLi4uFx8zODMtOCgtLisBCgoKDg0OGxAQGy8fHyUtLS0tLi0tKy0tLS8rLS0tLS0tLS0tLS0rLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANIA8AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABGEAACAQIDBAUHCAgFBQEAAAABAgADEQQSIQUGMVETIkFhcTJSgZGhscEHFEJicpLR0hUWMzRTgpOyI0OiwvAkY+Hi8VT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAMxEAAgECBAIIBQQDAQAAAAAAAAECAxEEEiExQVEFE2FxkaGx8CIyUoHhFMHR8RUj0kL/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAK7vxt2pgMGa9NFqNnRQrXt1jqdNZsbo7XbG4GliHUI1QNdRewKuyaX1+jeR/wAojkYMFaYrFatNujKlwwF+KjW03NzsUXwNNmprQJ6S9MDKF/xH7Da1+PpnL6krfDc+to7QqJex+lYaeM2dm4tayjrnPbrLf3d0jtrLe/2/iR2TDsvBOK9gQDTPW14jhp4iZFOefmja6cHS5MsvRd7euOi+s3rmWJrsjDdmHoj57ez8J5RJuQTe1rcO3w8JnmFf2h+yvvactZoXuZoiJI4IiIAiIgCJ8K4PAgz7gHhgTmu8+fHVSVrWorYIovZtNXI7ze3HQA9srFDFYjBVeo7Iy9gPVI714MPGZ3iVeyR6MOjpShfNZ8re/Q7lEhd2NtrjMOKgsHHVqL5rd3ceIk1L001dGCUXGTjLdCIidIiIiAIiIAiIgCIiAYzSUm5AJ52le2rvPhMNVNKopzgAmyKRYi41vLA9WxtZvQCfbKLvVu7WxOKNVAMpVR1swNwCDpaU1ZWWi17jf0fSpVKuWvK0bc7a6WJ18chKMVBpuR2WOUi6mwGvZpJtKChi4FiQAfAd0pe9NY4bCAm6nRV6v0sptx07L+ibG7W/VCtTVcQ4o1QLEtojfWDcB4G05SvrcprJaOPaXOJBY7evCUrf4y1C3krSIqE/d0HiSJq4bfSgzhXVqQJADMQRc6DNbhLzPZlnmH/MP2V97TNMI/aH7K+9pGXALiZoiJI4IiIAkJtva60kZVb/ABDpYfRv2k8L2+EmjKJjNm1BXKMysxBctrwsWJI7JRiJzjG0VuasLTpyleb21tz/ABzMu7VRxXAW9iDm5cNCe+9pY9uY1aOFq1GNsqN6yLKB6SJj3coKMOpAAJuSeept7LTeq0wwKsAQQQQdQQeII5TmHhlppX318TuKqqde7W2na7M5zTpMaKKMqsBTuCS4AFswBBUnTMAfA27Jr7cw1JlL1DYhSF14niAB26++WbeBamEoWpI9WkWUZEy5xfgCXYdTTjeUbb1Kq1UEobZRbLdgOeoExypuMrM9ejUVT4k9Pe/BM0dm7Rq4aoKlJyjD1EcmHAido2HjWr4anVZMhdQSvLs07ja47iJxXB4CrWbJTps7HSwBPrPADvM7rhwwRc1s1hmtwvbW3pmvD31MfSmX4efnb3z5GaIiaTyRERAEREAREQBERAE8Mr+2cRiVq2pNZbA+Sp17eM2NiYmp0bdOwzZtOA6thy77ytVVmy/0aJYZqmqmZO/BPXwsfVTBU65qU6iB0a4IPj2cjpxnNN992EwBRqdQstUtZG8pbWJ630hqOydKbFpRFas3korMba6C50nJtr7UqbRxWduqvBUBuEQd/aT2nnOU/l8Tkr5vD0PNg4MscxsC2gJ0AUcSfV7JsbybOIVWVs6637AOHDn2+qTGwqQzM1rZAAo7Lm493xm5j8K3zdlOY9Ty2UXYgXudLEm3YO2VVarjNJGmjSU4uT+3v+yZ3N3rGLQU3UrUQKpN7hjbQ81vY919L6i9mH7Q/ZX3tKP8mOApvTrVrHMa2UHsypldbeltfAS8/wCYfsr72mh8DC0tbe9jNERJEREx1agVSzEAKCSToABqSTynPMR8r2EWrlWjWqUwf2gyi/eqMQbeNj3QdSb2OjzTq4empeqy3JSzE69Vbm1pEbO322fXTOuLpJzWowpMPFXsfVcSpb8fKRSFJqGDfpKj6NVA6iL25SfLYjTTQX9E47M7FO9j5xdLHY/GrRpVmwlCn16TUqlrBSpyvT06R7k2HkgA3vOkgGygm5A1NrXPOw0HbOb7v45agpVUNlzLYkZbWaxuO6x7p0pjreZ8PVc01LdGrGUo02nHZ6lZ3kxRNQU+xLE95I/A+0xsLZxdhUa4VTp9Y/hJuvs6k752W58Tr4jtm1w0H/yOovNykzrxSjSVOC7/AMd/M+leZpgEypwmkxH1ERAEREAREQBERAEREA8tFp7EAjDTFbpaTjOjBlKk6EG4t3aTk2zsJ0YNxlYnUcrcBOh7exrUw6LoapZc3IC97d50HrnP9pZ0XKFOZtB3DtN5GEZOCff6l0mlK3d6GbB7XN6lNSBazISLgkaMGtrY6ajhx7p5tPems1LosuTQ/TzAA6HLoNfdI7BYLIbk3Nrd02qtFXFiP+d0vWBjJZn83kc/UyXwrYv3ya41auACBQposUawsGOjBvEhte8GWZP2h+yvvaVn5P6tBcN0FO4dSWcNxYn6Q5i1h3WHjLMn7RvBfjKZRcWk/ejIJrVr3qjPEROkTmPynb6hKT4OkpLVlZWqE2shJVsqjU3swBNuYuLX5/gN2c9A1HqCkxay5vJIsPKPZrcX7pbvla2ZSo4nCVEUhqi1EY8QQhGTTzv8Q+gDlN/5m3RBRnCqFGcAahSO7LY2sdO3SY8TVlGyR6ODoxnFtnI61IoxU6FSQfEGx906D8mu41HHU/nNeoWRXKdCulyoB678bHMNBbxlY3ywy08WcotnUOftEm5Hq982dxt7X2ZXLEF6NSwqp4cHT6wBPiNORF9OSlFS5lNWDi3FcDsW3dhqqB6KBQigFFFgFUWGUDhYdnKaOyNttSsr3ZPavhzHdLlTcMoINwRcHuIuJW8fsDNWBQhUY9Yeb9nx9korUpRlnp78ffqWYevCUOqrbcH78vAnKNdXUMpBB4GZBMdKiEUKosF4CZCZrW2phdr6HoEzzFRXtmWdOCIiAIiIAiIgCIiAJFVMQ4cjMfKt7ZKE2kVWt03EWup90qq7LvLaNrvuNzD4nOxFrW755icVkIFr3HOaWGq5Cx46fERWr9JxAFuFvRIda8u+pPqln20IXeFWcqyozdZiQoJIuO6VTEYWszEmlU+42g9U6ecGjahvUQZ5+jh5x9U0Uq9SnHKkn9yE1Tm73t9jlgwdX+FU+434Tz5pU/hv9xvwnU/0b9b2f+Z7+j/rH1S79ZV+leJDq4fV5HMsJTr03V0SoGU3BCN+GonSdj4s1k6RkKMQuZSCCCL349kyjZw84+yZ8Phwl7X15yqpWlUazRSt2nbRinZ3M8RE4QOafLXtIJh6NAKC9RzUDkaoKdtUPYxLgeF5UsFvriKlHohTDEEXJqFad/OKhSe+w9kt/wAq9TDV0SgbtWptmBW3UU+Urn6wtp3A+NDp0wosAAOUup4JVvint5lkMRKmrR3NHeraBq1EW+bo1sWy5bu2rWHYvCwmpu5hBXxuHpMnSLUrU1ZbkXUsM2o1Glz6JtbQ2aXYspF7cOduRkdh8JUziwZSCDm1GWxvcHnK5YaVN5Unbhx9+RZ1yqat6n6jRQBYCwHZILD70YKoNMTTHc7ZD/rtIjC70mpsitWY2q0lNNjzdrKj278wPiDOVdGOUl1dm0+Bkc7bHdP0zhgP3mh49Kn4zCm8OENRaa10d3YKoQ57k963AE5Hu7hkfEorDMOtobkaKSLiXrD0UpEFEVDxBVQNRr2TqpkesZfgJ7MOGrB0Vh9IA/jM0qLRERAEREAREQBERAMWIW6MB2gyK+bv5p9Umolc6ak7lkKjirFbfEIKopFgKjLmWmSM5XXULxI6p9RmycO3mt6jKztZ77y4YcqJH+iufjOgyqFJO/ebMR/qUHvmipebVvIiKIqJwUi/dMvS1uR+7JKJYqVtmzK6qe8URvT1vNP3Z701bzfZJGJ3I/qZzrF9KI7p63m+ye/OK3mew/jJCIyP6mc6xfSjQSvVJF00vrofxkZvjvAMFR6tjVqXFMcubkch7TaTG0cWlCk1VzZUFyfgO8mw9M4rtvar4uu1Z+3RV7FUcFH/ADiTNWFoZpXeqRXOa4KxpVHLMWYlixJJOpJPEk858zxT8Z7PWKTwmfU+TxHp/D4z2AZ0rv0T0l8moULDnkzW/u9kjnUWOg7eyb1Dj6/cZjxtP6Q7fKnmYmplr5Oa/n+DcsHmwjxEX8rs12aa+eu5I7q/va+D/wBpl4fh4SkbqfvS/Zb3S7vwPhCPPLJu7VvSK+a3sOvvvJaQG7Lav4L8fxk/KJ/My6OwiIkSQiIgCIiAIiIAmOrUCgkkADiSbAeJmSct+WPFVlbCqpYU2LE2uFaoCtg3M2vYHmeU5J2Vy6hS62ooXtf39zHT23RfeDpjURaaKUV2NlJFMr5R0sSTrOnfOUyZ865beVmGX73CfnvaaKrg6i/lfj4yR2LsHFNmdMPVNO3HIwvyIFte3heY4Vmm9L31PpcX0TTnlzVMqilHVLW33WvF8Ow7XgNrUa7OtOoHNO2a1+3gQe0aHUSQnP8A5Otn1KdaqzoyDJlIZSt2LA8DyA9s6BNVOTlG7Pn8dQhQrunB3St5oREht49uJgqOduszaIl9WPwA7T+MsjFydkZCZmpjdoUqAvVqJTB4ZmC38L8ZyPG72Y2qxJrsn1afUA7hbX1kyGxFZ6hzPUdyBYFmLGw7LtfSbI4N/wDp+BHMWnfneUYpxSpG9FNSeGd+fgOzvueUqTGwnyc3d/z0z0a//LTbCChHKiDdz1RYWnsGfOXmfgJI4e9s9gCewDJQGs9xPkeme0R1Z9VKTOtlUseQBJ9k8HETzYvuaXh+bn1NKlk6KlfjGT8dvKxtbpfvQ+y3ul3fhKjutgaq18zU2VcrC7AjU25y2vwPgZrR8oTO7HlP9lfjLDK/uz5T+C/GWCU1PmLobCIiQJCIiAIiIAiIgCYa1FXXKyhgeIIBHqMzRAI2jsPCo+dcNRV/OFNQfQbaSSiJxJLYlKTk7ydxEROkTBi8StKm1RzlVAWY8gJxbeDbD4yu1VrgcEXzU7B49p75eflQqVRh6ar+yZz0hHMAZAe6+Y+IE5pPQwlNZc/H0ISfAT5U3/52Tx+XP3ds+psICeET2ewDwC0TLTp34z76McpiqY+lTlld3zsepR6IxNWn1isr7XbV1z2dvvbnsa89UXmc015T64Smp0pBL4E2+235NVHoGo5f7ZJLsu36WXfr3CTm6yXdzyUD2iQks27FK1Nm85regD8SZ5mHTlVT+56vS8lTwUktL2S8V+1yanzU4HwM+p81OB8J6h8UTm7I1qfyf7pPSC3ZH7T+X/dJ2UT+YuhsIiJAkIiIAiIgCIiAIiIAiIgCIiAYcRQWopR1DKwsVIuCORE5NvjsBcLXIpXyFQ+Um5W5IIB7Rp26zr8ovyj0evRPn3U+CkMfYTNGGm4ztzK6rajdHNraxJmvgFY31BPG0+sBu5UxC1DS6xpgtlOhbWwAPM2NvCek5xSuyqM09EQk9E9ImTBpmqotr5nQW53YC0k9ixbmUmJe6uxsKpINJlI7LsP90+P0RhP4TetvzT5j9PLsPrv85hvpl4R/6KPEu/6Gwn8NvWfzTaobr4dlL9CQoBN2Zhe3LrR1Eh/nMNyl4L/o58JdtmUujoov1QT4nU++az0MKAclE37CxJA77FjJrc6nmquSLhUA9JP/AKmdoVFCdlrflw8jJ0pV/U0VZOKi76214LZu27ME+WFxLJvDSHzWpYAWAOg5MJRsx5zRVxnVu2W/3PHoYLrY5s1vt+S67tDqv4j3SakXu4P+lp+B/uaSklnz/FzKnDI3Hk7CIiDgiIgCIiAIiIAiIgCIiAIiIAlK39xF3p0x9EFj/MbD+0y6zl+38X0uJqP2Zsq+C9Ue6/pmjDRvO/Ipru0bEdUNh39nidBLD8nuPAxVbD/9tGHipIPsdfUZW6ja68FBY/D4+qYNysUw2nSYAnOzKQPNZWv6Bof5ZpxDiqbu7fyZ6KlKolFX/jidH2rubhcS5qMGRm8o0yFDHmQQRfvEzbP3RwdAhlpBmGoZyXII4EA6A+Ak9Ew9ZO1ruxtsjDXw6uLMobx+B7JAbRo0adULlYDQmx5nvMssrG3v3j0LIHWSlPZ603zCmGHZrqPQ2hPfeNp4xBSdbkMUaykEEkggWknIneRF+bu5GqgZTyJIHxkZO0WyUE3JJcyjMttDpLlulhclAueNQ39A0Hx9cqFKmXcKNSxAHiTadHw9IIioOCgAeAFpiwsLycuXv09T08dUtBQ5/t+fQ1dtrfDVfsH2azns6NtTXD1R/wBup/aZzoLfQcTpGL3XcOj/AJH3nQdi08uGpD6gPr1+M35jpU8qgDsAHqFpkm6Kskjy5SzNvmIiJ04IiIAiIgCIiAIiIAiIgCIiARe8WKejhKr01ZnCHIFBY5joDYa2BN/ROP4LaRuEcHNcC4Gt+FivG87fSrK18rBrEg2INiOINuBmvidmUarK70kZkIZWKgsCDcENxkU6sZKVOVuzdP3z3LI9U4uNSN+29mvfLbmUndnY2fEEVafVQEsrroT5IBB7OJ9EsewN1cPg2Z0BZ2v12Nyqk+SvIcNeJtLBKdvht+vha9NaZXKUzFSt7nMRqePZ2WksTVi2qkltsMJRnK9KD31fC9iwtjrYkUcvGmamblZspB9Y9skJTdzsfUxWJrV6lgVpogA4AFmNhc/Vv6ZcpXSnnWYniKXVTycbK/fYSPxWHps92UE6Wvx7pISNxv7Zf5feZYZ2SIkJvZUthiPOZR6jm/2yQ2ljkw9JqtQ2VR6SewDmTILZW1aG0qbdKgpmkeBqdhGjXFuRHokKibi0t2XUbRkpvZP35mluphs9fN2Uxf0nQfE+iXaQ+w6NCmai0aq1DcFgGDFRrYG3pkxIUIZIWZPE1VUqXWxgxa3puOasPYZQdkpnxFIfXX1A3Pul/wATUVEZmIVQCWJ4Adsp2wNpYJ8SiU1qq+uVntlJynTjxIvbSRrU3OUXy/BZhqypwmvDwe5d4iJoMYiIgCIiAIiIAiIgCIiAIiIBo7Ux4oUi5V3toFRSzE+HZ4mULbO9OKrXREakh7FBzkd7W09Fpe62x6DvnNMZz9IEqfWpE+/0eg+lV/rVfi8qqU5S2lZd35NOHrU6WsoZn2v9tjnW7VfGYZyadCpUV/KUo+U24HNbQ/jLVhdpbQqVFvhVp08wzEnrZb62u3Luk8cCvnVP6tT8016+xqbghmrEHQjp6tiO8ZtZGnQcFbM/ItrYxVW5Omrvi7v90bprKB5Q9YnNN5674zEhqVGqQqhF6jXNmY3tbQdb2S4DczBfwj99/wA02zsKla2evbl85r/nk61JVFa9vsVYbEKhLPa77zT3S2cMLh8rlRUc5nFxoeAX0AesmTjVlAvmHrEg/wBS8D/CP33/ADTNS3YwyCyioo5LWqgeoNLIxjFWRTUm6k3OW7N2rtBRwBb2CaNfEF2zcCOFv/My/q7Q51v69b88fq5Q51v69b88loV2KjvHsfFVxda5rWNwlU5B6Ci2v/KPGc523j8Rgz/1GCq0x55INM+FRQV9F7zuf6uUOdb+vW/PPlt2cOQQelIPEGvVIPiC0jliWKpJaXOS/JrvsBtCnSNFguJBQNmFha7ZuGoGRh6Z275ynnr94SD/AFKwP8I/ff8AGe/qXgv4R++/4ztokW7u7Kv8r+9lPC0qWHsX+cFmJUjQUihte+hJZfUZytN76Q1FOoOWo0PMdad6bcnAnjRv4u5+M+f1E2f/APnH3m/GccYkozcdESG7m11xmEo4kdXpqavlJFxccJJ5hzkEu5uBHCh/rf8ANMi7pYIf5A+8/wCad0IE3EjMPsPDUzdaQBHex95knOAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z",
  },
  {
    name: "Men Saloon",
    link: "Men Saloon",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Home Spa For Women",
    link: "Home Spa For Women",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Home Spa For Men",
    link: "Home Spa For Men",
    image:
      "data:image/jpeg;base64,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",
  },
];
interface HomeScreenProps {
  navigation: any;
}
const CategoriesCards: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (data: Home) => {
    navigation.navigate(data.link);
  };

  return (
    <Container>
      <Text
        style={{
          fontFamily: "Box",
        }}
      >
        Home Services
      </Text>
      <View style={styles.tabs}>
        {items.map((a) => (
          <View style={styles.viewSection} key={a.name}>
            <TouchableOpacity onPress={() => handleCategoryPress(a)}>
              <Image source={{ uri: a.image }} style={styles.itemImage} />
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 12,
                  textAlign: "center",
                  fontFamily: "Box",
                  color: "black",
                }}
              >
                {a.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Box",
          }}
        >
          Beauty
        </Text>
        <View style={styles.tabs}>
          {Beauty.map((a) => (
            <View style={styles.viewSection} key={a.name}>
              <TouchableOpacity onPress={() => handleCategoryPress(a)}>
                <Image source={{ uri: a.image }} style={styles.itemImage} />
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: 12,
                    textAlign: "center",
                    fontFamily: "Box",
                    color: "black",
                  }}
                >
                  {a.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Box",
          }}
        >
          Resturants
        </Text>
        <View style={styles.tabs}>
          {Resturants.map((a) => (
            <View style={styles.viewSection} key={a.name}>
              <TouchableOpacity onPress={() => handleCategoryPress(a)}>
                <Image source={{ uri: a.image }} style={styles.itemImage} />
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: 12,
                    textAlign: "center",
                    fontFamily: "Box",
                    color: "black",
                  }}
                >
                  {a.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Box",
          }}
        >
          Cars Services
        </Text>
        <View style={styles.tabs}>
          {Cars.map((a) => (
            <View style={styles.viewSection} key={a.name}>
              <TouchableOpacity onPress={() => handleCategoryPress(a)}>
                <Image source={{ uri: a.image }} style={styles.itemImage} />
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: 12,
                    textAlign: "center",
                    fontFamily: "Box",
                    color: "black",
                  }}
                >
                  {a.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    flexWrap: "wrap",
  },
  viewSection: {
    backgroundColor: "#f7f8f8",
    padding: 10,
    width: "30%",
    marginTop: 10,
    marginRight: 10,
  },
  cardContainer: {
    backgroundColor: "green",
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
});
export default CategoriesCards;