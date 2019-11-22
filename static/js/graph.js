queue()
    .defer(d3.csv, "data/master.csv")
    .await(makeGraphs);

    function makeGraphs(error, suicideData) {
        var ndx = crossfilter(suicideData);

        
        
        show_year_selector(ndx);
        show_suicide_per_gender(ndx);
        show_suicide_per_age(ndx);
        show_suicide_per_generation(ndx);

        show_suicide_per_gender_pie(ndx);
        show_suicide_per_age_pie(ndx);
        show_suicide_per_generation_pie(ndx);
        show_generation_distribution(ndx);

        var parseDate = d3.time.format("%Y").parse;
        suicideData.forEach(function(d){
            d.year = parseDate(d.year);
            d.suicides_no = parseInt(d.suicides_no);
        });

        show_years_to_suicide_correlation(ndx);
        show_suicide_line_graph (ndx);
        show_suicide_line_graph_2 (ndx);

        dc.renderAll();
}

function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('year'));
    var group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}

function show_suicide_per_gender(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group().reduceSum(dc.pluck('suicides_no'));

    dc.barChart("#gender-balance")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(5);
}

function show_suicide_per_age(ndx) {
    var dim = ndx.dimension(dc.pluck('age'));
    var group = dim.group().reduceSum(dc.pluck('suicides_no'));

    dc.barChart("#age-balance")
        .width(550)
        .height(250)
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Age")
        .yAxis().ticks(5);
}

function show_suicide_per_generation(ndx) {
    var dim = ndx.dimension(dc.pluck('generation'));
    var group = dim.group().reduceSum(dc.pluck('suicides_no'));

    dc.barChart("#generation-balance")
        .width(550)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Generation")
        .yAxis().ticks(5);
}

function show_suicide_per_gender_pie(ndx) {
    var gender_dim = ndx.dimension(dc.pluck('sex'));
    var count_group = gender_dim.group().reduceSum(dc.pluck('suicides_no'));

        dc.pieChart('#suicide-per-gender-pie')
            .height(250)
            .radius(100)
            .transitionDuration(1500)
            .dimension(gender_dim)
            .group(count_group);
}

function show_suicide_per_age_pie(ndx) {
    var age_dim = ndx.dimension(dc.pluck('age'));
    var count_group = age_dim.group().reduceSum(dc.pluck('suicides_no'));

        dc.pieChart('#suicide-per-age-pie')
            .height(660)
            .radius(200)
            .transitionDuration(1500)
            .dimension(age_dim)
            .group(count_group);
}

function show_suicide_per_generation_pie(ndx) {
    var gen_dim = ndx.dimension(dc.pluck('generation'));
    var count_group = gen_dim.group().reduceSum(dc.pluck('suicides_no'));

        dc.pieChart('#suicide-per-generation-pie')
            .height(660)
            .radius(200)
            .transitionDuration(1500)
            .dimension(gen_dim)
            .group(count_group);
}

function show_generation_distribution(ndx) {

    function genByGender(dimension, generation) {
        return dimension.group().reduce(
            function(p, v) {
                p.total++;
                if (v.generation == generation) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.generation == generation) {
                    p.match--;
                }
                return p;
            },
            function() {
                return {total: 0, match: 0 };
            }
        );
    }

    var dim = ndx.dimension(dc.pluck('sex'));
    var boomersByGender = genByGender(dim, "Boomers");
    var gigenByGender = genByGender(dim, "G.I. Generation");
    var genxByGender = genByGender(dim, "Generation X");
    var genzByGender = genByGender(dim, "Generation Z");
    var millenialsByGender = genByGender(dim, "Millenials");
    var silentByGender = genByGender(dim, "Silent");

    dc.barChart("#suicide-distribution")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 100, bottom: 30, left: 30 })
        .dimension(dim)
        .group(boomersByGender, "Boomers")
        .stack(gigenByGender, "GI Generation")
        .stack(genxByGender, "Generation X")
        .stack(genzByGender, "Generation Z")
        .stack(millenialsByGender, "Millenials")
        .stack(silentByGender, "Silent")
        .valueAccessor(function (d) {
            if (d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            }
            else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .legend(dc.legend().x(300).y(20).itemHeight(15).gap(5));
}

function show_years_to_suicide_correlation(ndx) {


        var date_dim = ndx.dimension(dc.pluck('year'));
        var total_spend_per_date = date_dim.group().reduceSum(dc.pluck('suicides_no'));
        var minDate = date_dim.bottom(1)[0].year;
        var maxDate = date_dim.top(1)[0].year;
        dc.lineChart("#scatter")
            .width(1000)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(date_dim)
            .group(total_spend_per_date)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate,maxDate]))
            .xAxisLabel("Year")
            .yAxis().ticks(4);

}

function show_suicide_line_graph (ndx) {
        var date_dim = ndx.dimension(dc.pluck('year'));
        var minDate = date_dim.bottom(1)[0].year;
        var maxDate = date_dim.top(1)[0].year;
        function spend_by_name(name) {
            return function(d) {
                if (d.sex === name) {
                    return +d.suicides_no;
                } else {
                    return 0;
                }
            };
        }

        var maleSuicidePerYear = date_dim.group().reduceSum(spend_by_name('male'));
        var femaleSuicidePerYear = date_dim.group().reduceSum(spend_by_name('female'));
        
        var compositeChart = dc.compositeChart('#line-graph');
        compositeChart
            .width(990)
            .height(200)
            .dimension(date_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Suicide")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                    .colors('blue')
                    .group(maleSuicidePerYear, 'male'),
                dc.lineChart(compositeChart)
                    .colors('red')
                    .group(femaleSuicidePerYear, 'female'),

            ])
            .brushOn(true)
            .render();
}

function show_suicide_line_graph_2 (ndx) {
        var date_dim = ndx.dimension(dc.pluck('year'));
        var minDate = date_dim.bottom(1)[0].year;
        var maxDate = date_dim.top(1)[0].year;
        function spend_by_name(name) {
            return function(d) {
                if (d.generation === name) {
                    return +d.suicides_no;
                } else {
                    return 0;
                }
            };
        }
        var boomersSuicidePerYear = date_dim.group().reduceSum(spend_by_name('boomers'));
        var gigenSuicidePerYear = date_dim.group().reduceSum(spend_by_name('G.I. Generation'));
        var genxSuicidePerYear = date_dim.group().reduceSum(spend_by_name('Generation X'));
        var genzSuicidePerYear = date_dim.group().reduceSum(spend_by_name('Generation Z'));
        var millSuicidePerYear = date_dim.group().reduceSum(spend_by_name('Millenials'));
        var silentSuicidePerYear = date_dim.group().reduceSum(spend_by_name('Silent'));
        
        var compositeChart = dc.compositeChart('#line-graph-2');
        compositeChart
            .width(990)
            .height(200)
            .dimension(date_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Suicide")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                    .colors('green')
                    .group(boomersSuicidePerYear, 'boomers'),
                dc.lineChart(compositeChart)
                    .colors('red')
                    .group(gigenSuicidePerYear, 'G.I. Generation'),
                dc.lineChart(compositeChart)
                    .colors('blue')
                    .group(genxSuicidePerYear, 'Generation X'),
                dc.lineChart(compositeChart)
                    .colors('orange')
                    .group(genzSuicidePerYear, 'Generation Z'),
                dc.lineChart(compositeChart)
                    .colors('pink')
                    .group(millSuicidePerYear, 'Millenials'),
                dc.lineChart(compositeChart)
                    .colors('purple')
                    .group(silentSuicidePerYear, 'Silent'),
            ])
            .brushOn(false)
            .render();
}