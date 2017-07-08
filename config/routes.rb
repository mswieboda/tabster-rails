Rails.application.routes.draw do
  root 'tabs#index'
  get '*path', to: 'tabs#index'
end
