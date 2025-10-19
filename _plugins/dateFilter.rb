module Jekyll
  module DateFilter
    MESES = {
      "January" => "Enero",
      "February" => "Febrero",
      "March" => "Marzo",
      "April" => "Abril",
      "May" => "Mayo",
      "June" => "Junio",
      "July" => "Julio",
      "August" => "Agosto",
      "September" => "Septiembre",
      "October" => "Octubre",
      "November" => "Noviembre",
      "December" => "Diciembre"
    }

    def date_es(date)
      day = date.strftime("%d")
      month = MESES[date.strftime("%B")]
      year = date.strftime("%Y")
      "#{day} de #{month} de #{year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)