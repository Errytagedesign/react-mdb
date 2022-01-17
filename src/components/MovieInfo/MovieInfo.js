import React from "react";

// components
import Thumb from "../Thumb/Thumb";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// Image
import NoImage from "../../images/no_image.jpg";

// Styles
import { Wrapper, Content, Text } from "./MovieInfoStyles";

function MovieInfo({ movie }) {
  return (
    <div>
      <Wrapper backdrop={movie.backdrop_path}>
        <Content>
          <Thumb
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            clickable={false}
          />

          <Text className="">
            <h1> {movie.title} </h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>
            <section className="rating-directors">
              <article>
                <h3>RATINGS</h3>
                <div className="score"> {movie.vote_average} </div>
              </article>

              <article className="directors">
                <h3>
                  {movie.production_countries.lenght > 1
                    ? "PROD. COUNTRIES"
                    : "PROD. COUNTRY"}{" "}
                </h3>
                {movie.production_countries.map((prodCountry) => (
                  <p key={prodCountry.iso_3166_1}> {prodCountry.name} </p>
                ))}
              </article>
              <article className="directors">
                <h3>
                  {movie.production_companies.lenght > 1
                    ? " PROD. COMPANIES"
                    : " PROD. COMPANY"}{" "}
                </h3>
                {movie.production_companies.map((prodCompany) => (
                  <p key={prodCompany.id}> {prodCompany.name} </p>
                ))}
              </article>
              <article className="directors">
                <h3>DIRECTOR{movie.directors.lenght > 0 ? "S" : ""} </h3>
                {movie.directors.map((director) => (
                  <p key={director.credit_id}> {director.name} </p>
                ))}
              </article>
            </section>
            {/* <section>
              <article>
                <h3>ACTORS</h3>
                <div className="actors ">
                  {" "}
                  {movie.actors.map((actors) => (
                    <p className="actName" key={actors.credit_id}>
                      {actors.name}
                      <img
                        className="tooltip"
                        src={
                          actors.profile_path
                            ? IMAGE_BASE_URL + TOOLIP_SIZE + actors.profile_path
                            : NoImage
                        }
                        alt=""
                      />
                    </p>
                  ))}
                  <div></div>
                </div>
              </article>
            </section> */}
          </Text>
        </Content>
      </Wrapper>
    </div>
  );
}

export default MovieInfo;
