var documenterSearchIndex = {"docs":
[{"location":"api_reference/#PositiveIntegrators.jl-API","page":"API reference","title":"PositiveIntegrators.jl API","text":"","category":"section"},{"location":"api_reference/","page":"API reference","title":"API reference","text":"CurrentModule = PositiveIntegrators","category":"page"},{"location":"api_reference/","page":"API reference","title":"API reference","text":"Modules = [PositiveIntegrators]","category":"page"},{"location":"api_reference/#PositiveIntegrators.ConsProdDestODEProblem","page":"API reference","title":"PositiveIntegrators.ConsProdDestODEProblem","text":"ConsProdDestODEProblem(P, u0, tspan, p = NullParameters();\n                        p_prototype = similar(u0, (length(u0), length(u0))), analytic=nothing)\n\nA structure describing a conservative ordinary differential equation in form of a production-destruction system (PDS). P denotes the production matrix. u0 is the vector of initial conditions and tspan the time span (t_initial, t_final) of the problem. The optional argument p can be used to pass additional parameters to the functions.\n\nThe function P can be given either in the out-of-place form with signature production_terms = P(u, p, t) or the in-place form P(production_terms, u, p, t).\n\nKeyword arguments:\n\np_prototype: If P is given in in-place form, p_prototype is used to store evaluations of P.    If p_prototype is not specified explicitly and P is in-place, then p_prototype will be internally set to zeros(eltype(u0), (length(u0), length(u0))). \nanalytic: The analytic solution of a PDS must be given in the form f(u0,p,t).    Specifying the analytic solution can be useful for plotting and convergence tests.\n\nReferences\n\nHans Burchard, Eric Deleersnijder, and Andreas Meister. \"A high-order conservative Patankar-type discretisation for stiff systems of production-destruction equations.\" Applied Numerical Mathematics 47.1 (2003): 1-30. DOI: 10.1016/S0168-9274(03)00101-6\n\n\n\n\n\n","category":"type"},{"location":"api_reference/#PositiveIntegrators.MPE","page":"API reference","title":"PositiveIntegrators.MPE","text":"MPE()\n\nThe first-order modified Patankar-Euler algorithm for conservative production-destruction systems. This one-step, one-stage method is first-order accurate, unconditionally positivity-preserving, and linearly implicit.\n\nThe modified Patankar-Euler method requires the special structure of a ProdDestODEProblem.\n\nReferences\n\nHans Burchard, Eric Deleersnijder, and Andreas Meister. \"A high-order conservative Patankar-type discretisation for stiff systems of production-destruction equations.\" Applied Numerical Mathematics 47.1 (2003): 1-30. DOI: 10.1016/S0168-9274(03)00101-6\n\n\n\n\n\n","category":"type"},{"location":"api_reference/#PositiveIntegrators.MPRK22","page":"API reference","title":"PositiveIntegrators.MPRK22","text":"MPRK22(α)\n\nThe second-order modified Patankar-Runge-Kutta algorithm for conservative production-destruction systems. This one-step, two-stage method is second-order accurate, unconditionally positivity-preserving, and linearly implicit. The parameter α is described by Kopecz and Meister (2018) and studied by Izgin, Kopecz and Meister (2022) as well as Torlo, Öffner and Ranocha (2022).\n\nThis modified Patankar-Runge-Kutta method requires the special structure of a ProdDestODEProblem.\n\nReferences\n\nHans Burchard, Eric Deleersnijder, and Andreas Meister. \"A high-order conservative Patankar-type discretisation for stiff systems of production-destruction equations.\" Applied Numerical Mathematics 47.1 (2003): 1-30. DOI: 10.1016/S0168-9274(03)00101-6\nStefan Kopecz and Andreas Meister. \"On order conditions for modified Patankar-Runge-Kutta schemes.\" Applied Numerical Mathematics 123 (2018): 159-179. DOI: 10.1016/j.apnum.2017.09.004\nThomas Izgin, Stefan Kopecz, and Andreas Meister. \"On Lyapunov stability of positive and conservative time integrators and application to second order modified Patankar-Runge-Kutta schemes.\" ESAIM: Mathematical Modelling and Numerical Analysis 56.3 (2022): 1053-1080. DOI: 10.1051/m2an/2022031\nDavide Torlo, Philipp Öffner, and Hendrik Ranocha. \"Issues with positivity-preserving Patankar-type schemes.\" Applied Numerical Mathematics 182 (2022): 117-147. DOI: 10.1016/j.apnum.2022.07.014\n\n\n\n\n\n","category":"type"},{"location":"api_reference/#PositiveIntegrators.ProdDestODEProblem","page":"API reference","title":"PositiveIntegrators.ProdDestODEProblem","text":"ProdDestODEProblem(P, D, u0, tspan, p = NullParameters();\n                   p_prototype = similar(u0, (length(u0), length(u0))),\n                   d_prototype = similar(u0, (length(u0),)),)\n\nA structure describing a production-destruction ordinary differential equation. P and D denote the production/destruction terms in form of a matrix. u0 is the vector of initial conditions and tspan the time span (t_initial, t_final) of the problem. The optional argument p can be used to pass additional parameters to the functions.\n\nThe functions P and D can be used either in the out-of-place form with signature production_terms = P(u, p, t) or the in-place form P(production_terms, u, p, t).\n\nReferences\n\nHans Burchard, Eric Deleersnijder, and Andreas Meister. \"A high-order conservative Patankar-type discretisation for stiff systems of production-destruction equations.\" Applied Numerical Mathematics 47.1 (2003): 1-30. DOI: 10.1016/S0168-9274(03)00101-6\n\n\n\n\n\n","category":"type"},{"location":"license/","page":"License","title":"License","text":"EditURL = \"https://github.com/SKopecz/PositiveIntegrators.jl/blob/main/LICENSE.md\"","category":"page"},{"location":"license/#License","page":"License","title":"License","text":"","category":"section"},{"location":"license/","page":"License","title":"License","text":"MIT LicenseCopyright (c) 2023-present Stefan Kopecz, Hendrik Ranocha, and contributorsPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"EditURL = \"https://github.com/SKopecz/PositiveIntegrators.jl/blob/main/CONTRIBUTING.md\"","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"ContributingPositiveIntegrators.jl is an open-source project and we are very happy to accept contributions from the community. Please feel free to open issues or submit patches (preferably as pull requests) any time. For planned larger contributions, it is often beneficial to get in contact first, for example via issues.PositiveIntegrators.jl and its contributions are licensed under the MIT license (see License). As a contributor, you certify that all your contributions are in conformance with the Developer Certificate of Origin (Version 1.1), which is reproduced below.Developer Certificate of Origin (Version 1.1)The following text was taken from https://developercertificate.org:Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n1 Letterman Drive\nSuite D4700\nSan Francisco, CA, 94129\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.","category":"page"},{"location":"#PositiveIntegrators.jl","page":"Home","title":"PositiveIntegrators.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The Julia library PositiveIntegrators.jl provides several time integration methods developed to preserve the positivity of numerical solutions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"TODO: More introduction etc.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TODO: PositiveIntegrators.jl has to be registered - up to now, it is not!","category":"page"},{"location":"","page":"Home","title":"Home","text":"PositiveIntegrators.jl is a registered Julia package. Thus, you can install it from the Julia REPL via","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg; Pkg.add(\"PositiveIntegrators\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you want to update PositiveIntegrators.jl, you can use","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg; Pkg.update(\"PositiveIntegrators\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"As usual, if you want to update PositiveIntegrators.jl and all other packages in your current project, you can execute","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg; Pkg.update()","category":"page"},{"location":"#Basic-examples","page":"Home","title":"Basic examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TODO","category":"page"},{"location":"#Referencing","page":"Home","title":"Referencing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you use PositiveIntegrators.jl for your research, please cite it using the bibtex entry","category":"page"},{"location":"","page":"Home","title":"Home","text":"@misc{PositiveIntegrators.jl,\n  title={{PositiveIntegrators.jl}: {A} {J}ulia library of positivity-preserving\n         time integration methods},\n  author={Kopecz, Stefan and Ranocha, Hendrik and contributors},\n  year={2023},\n  doi={TODO},\n  url={https://github.com/SKopecz/PositiveIntegrators.jl}\n}","category":"page"},{"location":"#License-and-contributing","page":"Home","title":"License and contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This project is licensed under the MIT license (see License). Since it is an open-source project, we are very happy to accept contributions from the community. Please refer to the section Contributing for more details.","category":"page"}]
}
