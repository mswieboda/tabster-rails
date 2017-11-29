Rails.application.routes.draw do
  root 'tabs#index'

  get 'hello_world', to: 'hello_world#index'

  resources :tabs

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
