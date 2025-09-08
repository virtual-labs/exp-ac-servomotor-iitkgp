# Theory
**Servomotors**

Servomotors (control motors) are the motors, designed and built for the use in feedback control systems.
They have high speed of response and they are made for dc as well as for ac operation. These motors are usually fractional horsepower motors having low efficiency.<br>

<div align="center">
<img alt="" src="./images/ckt.png" style="width:40%;height:30%"><br/>
<span><b>Fig. 1. Schematic representation of a Servomotor</b> </span>
</div>
<br/><br/>

The two phase induction motor is used as a servomotor. This is because<br/>

1. No brushes and slip-rings are used. Thus, less maintenance is required and the motor is rugged and robust in construction.<br/>

2. The motor requires only a simple control amplifier.<br/><br/>

A schematic of the two-phase induction motor is shown in Fig. 2. The motor consists of a stator with two distributed windings displaced by 90 electrical degrees apart. Under normal operating conditions in control applications, a fixed voltage from a constant voltage source is applied to one phase called the fixed or the reference phase (<span style="font-family:'Times New Roman'">E<sub>ref</sub></span>). 
The other phase is called the control phase, energized by a voltage (<span style="font-family:'Times New Roman'">E<sub>c</sub></span>) which is 90 degrees out of phase with respect to the voltage of the reference phase. The control phase voltage is usually supplied from a servo amplifier, the voltage has a variable amplitude and polarity. The direction of rotation of the motor reverses when the control phase signal Changes its sign. The rotor is squirrel cage or drag-cup type in structure.

<div align="center">								
<img class="center img-fluid" alt="" src="./images/2ph_IM.png" ><br/>
<b>Fig. 2. Schematic of a Two-Phase Induction Motor</b>
</div><br/>

Unlike a dc motor the torque-speed curve of a two phase induction motor is quite nonlinear. Considering Fig. 3, as the reference phase voltage is kept fixed,
the motor torque <i style="font-family:'Bodoni MT'">T<sub>m</sub></i> is a function of the speed and the control phase voltage and is represented by,

$$T_m = f ( \dot{\theta} , E  ) \tag 1$$

$$where, \ \dot{\theta} = \ speed , \  E = \ control \ phase \ voltage$$ 


<div align="center">
<img alt="" src="./images/eq1.png" class="img-fluid"><br/>
<b>Fig. 3. Speed-Torque characteristics of an ac Servomotor</b>
</div>

$$Let \ us \ choose \ (E_0,\dot{\theta}_0) \ be \ the \ operating \ point \ of \ the \ ac \ servomotor$$

Expanding equation (1) about the operating point with Taylor series expansion we have,

$$T_{m} = T_{m0} + \frac{\partial{T_{m}}}{\partial{E}} \vert \dot{\theta}_{0}E_{0} \ (E-E_{0}) + \frac{\partial{T_{m}}}{\partial{\dot{\theta}}} \vert \dot{\theta}_{0}E_{0} \ (\dot{\theta} - \dot{\theta}_{0}) \tag{2}$$

where the higher order terms in the Taylor series expansion are neglected.

Let

<i style="font-family:'Bodoni MT'">J</i> = Moment of inertia of rotor and disc

<i style="font-family:'Bodoni MT'">f</i> =	Coefficient of viscous friction

<i style="font-family:'Bodoni MT'">T<sub>L</sub></i> = Load torque 

$$K = \frac{\partial{T_{m}}}{\partial{E}}\vert\dot{\theta}_{0}E_{0}\dot{\theta}$$

$$f_{0}=\frac{\partial{T_{m}}}{\partial{\dot{\theta}}}\vert\dot{\theta}_{0}E_{0}$$

Then we can write the following equations

$$T_{m0}=J\partial{\ddot{\theta}_{0}}+f\partial{\dot{\theta}_{0}}+T_{L} \tag{3}$$

$$T_{m}= J({\ddot{\theta}_{0}}+\Delta{\ddot{\theta}})+f({\dot{\theta}_{0}}+\Delta{\dot{\theta}})T_{L} \tag{4}$$

In view of (2) – (4), the torque equation in incremental notation can be written as:

$$ \Delta{T_{m}} =J\Delta{\ddot{\theta}}+ f\Delta{\dot{\theta}}=K\Delta{E}-f_{0}\Delta{\dot{\theta}} \tag 5$$

Hence, the incremental motor transfer function is:

$$ G_{m}(s)=\frac{\theta(s)}{E(s)}=\frac{K}{S[Js+(f+f_{0})]} \tag 6$$

$$ =\frac{K_{m}}{s(\tau_{m}s+1)} \tag 7$$


$$where, \ \ K_{m}=\frac{K}{f+f_{0}}, \tau_{m}= \frac{J}{f+f_{0}} \tag 8$$

<i style="font-family:'Bodoni MT'">K<sub>m</sub></i>  = DC gain of the system,  <i style="font-family:'Bodoni MT'"><span style="font-size:18px;">&tau;</span><sub>m</sub></i> = Motor Time Constant



$$K = \frac{Change \ in \ torque \ in \ N-m}{Change \ in \ control \ phase \ voltage \ E \ ( \ volt \ )} \ at \ constant \ speed \ in \ rad/sec$$

$$f_0 = \frac{Change \ in \ torque \ in \ N-m}{Change \ in \ speed \ (  \ rad/sec \ )} \ at \ constant \ control \ phase \ voltage \ E \ ( \ volt \ )$$


For linear analysis the torque – speed curves of a two phase induction motor are approximated by straight lines, as shown in Fig. 4.<br/> 

<br/>
<div align="center">
<img alt="" src="./images/eq3.png" class="img-fluid"><br/>
<b>Fig. 4. Linear analysis of the torque – speed curves of a two phase induction motor</b>
</div><br/>


<b>Calculation for <i style="font-family:'Bodoni MT'">K<sub>m</sub></i> and <i style="font-family:'Bodoni MT'">&tau;<sub>m</sub></i> from graph </b> 
<br/>

<div align="center">
<img alt="" src="./images/fig5.png" class="img-fluid"><br/>
<b>Fig. 5. Calculation for <i style="font-family:'Bodoni MT'">K<sub>m</sub></i> and <i style="font-family:'Bodoni MT'">&tau;<sub>m</sub></i></b>
</div><br/>

Choose an operating point from the torque vs. speed graph, obtained from experiment. Let us consider operating point as (<i style="font-family:'Times New Roman'">A</i> gm-cm, <i style="font-family:'Times New Roman'">B</i> rad/sec) in fig 5 for
control phase voltage 180 V. <i style="font-family:'Times New Roman'">C</i> is the torque at constant speed <i style="font-family:'Times New Roman'">B</i> rad/sec for control voltage of 200 V.

so,

$$K = \frac{(C - A) \times (9.81 \times 10^{-5})}{(200 - 180)} \ N-m \ / \ volt \tag 9$$

Now consider a slope <i style="font-family:'Times New Roman'">AD</i> for constant control phase voltage 180 V. 
<br/>Where <i style="font-family:'Times New Roman'">D</i> = torque (gm-cm) for speed <i style="font-family:'Times New Roman'">S</i> rad/sec. Hence,

$$-f_0 = \frac{(D - A)\times (9.81 \times 10^-5)}{(S - B)} \ N-m \ / \ rad/sec \tag {10}$$

<span style="font-family:'Bodoni MT'"><i>f</i><sub>0</sub></span> is positive for a negative slope but it is negative for a positive slope.

Calculate the value of <i style="font-family:'Bodoni MT'">K</i> and <span style="font-family:'Bodoni MT'"><i>f</i><sub>0</sub></span> from graph.

						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>							
