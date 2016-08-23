Rails.application.routes.draw do
  root 'pages#index'

  get '/about' => 'pages#about', :as => 'about'
  get '/map' => 'pages#map', :as => 'map'

  get '/login' => 'pages#login', :as => 'login'
  post '/login' => 'pages#login'
  post '/logout' => 'pages#logout', :as => 'logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
