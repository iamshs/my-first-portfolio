import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-2">
        <h1 className="text-3xl text-center font-extrabold  my-5 font-serif">My Projects</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-40 ml-8 gap-2">
    <div class="card max-w-xs bg-purple-300 shadow-xl border ">
  <div class="card-body  ">
    <h2 class="card-title">Wild Life</h2>
    <div class="card-actions ">
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://github.com/iamshs/independence-service-provider-website"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Git Repo
        </a>
      </button>
     
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://wild-life-b3cdd.web.app/"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Live Site
        </a>
      </button>
     

    </div>
  </div>
</div>
    <div class="card max-w-xs bg-purple-300 shadow-xl border ">
  <div class="card-body  ">
    <h2 class="card-title">De Walt</h2>
    <div class="card-actions ">
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://github.com/iamshs/manufacturer-website-client"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Git Repo
        </a>
      </button>
     
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://de-walt-e12dc.web.app/"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Live Site
        </a>
      </button>
     

    </div>
  </div>
</div>
    <div class="card max-w-xs bg-purple-300 shadow-xl border ">
  <div class="card-body  ">
    <h2 class="card-title">Motor House</h2>
    <div class="card-actions ">
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://github.com/iamshs/warehouse-management-client"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Git Repo
        </a>
      </button>
     
      <button class="btn btn-primary btn-xs">
      <a
          class='social-icon-link github'
          href="https://warhouse-management.web.app/"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
         Live Site
        </a>
      </button>
     

    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Projects;
